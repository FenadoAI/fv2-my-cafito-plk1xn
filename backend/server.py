from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class MenuItem(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    name_ar: str
    description: str
    description_ar: str
    price: float
    category: str
    image_url: str
    available: bool = True
    popular: bool = False

class MenuItemCreate(BaseModel):
    name: str
    name_ar: str
    description: str
    description_ar: str
    price: float
    category: str
    image_url: str
    available: bool = True
    popular: bool = False

class StoreLocation(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    name_ar: str
    address: str
    address_ar: str
    phone: str
    hours: str
    hours_ar: str
    latitude: float
    longitude: float

class StoreLocationCreate(BaseModel):
    name: str
    name_ar: str
    address: str
    address_ar: str
    phone: str
    hours: str
    hours_ar: str
    latitude: float
    longitude: float

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Menu Items API
@api_router.post("/menu", response_model=MenuItem)
async def create_menu_item(item: MenuItemCreate):
    menu_item = MenuItem(**item.dict())
    await db.menu_items.insert_one(menu_item.dict())
    return menu_item

@api_router.get("/menu", response_model=List[MenuItem])
async def get_menu_items():
    menu_items = await db.menu_items.find().to_list(1000)
    return [MenuItem(**item) for item in menu_items]

@api_router.get("/menu/category/{category}", response_model=List[MenuItem])
async def get_menu_by_category(category: str):
    menu_items = await db.menu_items.find({"category": category}).to_list(1000)
    return [MenuItem(**item) for item in menu_items]

@api_router.get("/menu/popular", response_model=List[MenuItem])
async def get_popular_items():
    menu_items = await db.menu_items.find({"popular": True}).to_list(1000)
    return [MenuItem(**item) for item in menu_items]

# Store Locations API
@api_router.post("/locations", response_model=StoreLocation)
async def create_location(location: StoreLocationCreate):
    store_location = StoreLocation(**location.dict())
    await db.locations.insert_one(store_location.dict())
    return store_location

@api_router.get("/locations", response_model=List[StoreLocation])
async def get_locations():
    locations = await db.locations.find().to_list(1000)
    return [StoreLocation(**location) for location in locations]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
