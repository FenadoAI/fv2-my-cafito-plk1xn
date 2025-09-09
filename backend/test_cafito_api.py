import requests
import json

BASE_URL = "https://8001-izkm30z1fzazobgt114qb.e2b.app/api"

def test_menu_items():
    # Sample menu items for Cafito Dubai
    menu_items = [
        {
            "name": "Arabic Coffee",
            "name_ar": "قهوة عربية",
            "description": "Traditional Arabic coffee with cardamom",
            "description_ar": "قهوة عربية تقليدية بالهيل",
            "price": 15.0,
            "category": "hot_drinks",
            "image_url": "https://example.com/arabic-coffee.jpg",
            "popular": True
        },
        {
            "name": "Karak Tea",
            "name_ar": "شاي كرك",
            "description": "Spiced milk tea popular in Dubai",
            "description_ar": "شاي بالحليب والتوابل محبوب في دبي",
            "price": 12.0,
            "category": "hot_drinks",
            "image_url": "https://example.com/karak.jpg",
            "popular": True
        },
        {
            "name": "Espresso",
            "name_ar": "إسبريسو",
            "description": "Rich Italian espresso",
            "description_ar": "إسبريسو إيطالي غني",
            "price": 18.0,
            "category": "hot_drinks",
            "image_url": "https://example.com/espresso.jpg",
            "popular": False
        },
        {
            "name": "Iced Latte",
            "name_ar": "لاتيه مثلج",
            "description": "Refreshing iced coffee with milk",
            "description_ar": "قهوة مثلجة منعشة بالحليب",
            "price": 22.0,
            "category": "cold_drinks",
            "image_url": "https://example.com/iced-latte.jpg",
            "popular": True
        },
        {
            "name": "Matcha Latte",
            "name_ar": "ماتشا لاتيه",
            "description": "Premium Japanese matcha with steamed milk",
            "description_ar": "ماتشا يابانية فاخرة بالحليب المبخر",
            "price": 25.0,
            "category": "specialty",
            "image_url": "https://example.com/matcha.jpg",
            "popular": False
        },
        {
            "name": "Baklava Cheesecake",
            "name_ar": "تشيز كيك بقلاوة",
            "description": "Fusion dessert combining baklava and cheesecake",
            "description_ar": "حلوى مدمجة تجمع بين البقلاوة والتشيز كيك",
            "price": 35.0,
            "category": "desserts",
            "image_url": "https://example.com/baklava-cheesecake.jpg",
            "popular": True
        },
        {
            "name": "Date Cookies",
            "name_ar": "كوكيز التمر",
            "description": "Traditional cookies made with dates",
            "description_ar": "كوكيز تقليدية مصنوعة من التمر",
            "price": 8.0,
            "category": "desserts",
            "image_url": "https://example.com/date-cookies.jpg",
            "popular": False
        }
    ]
    
    for item in menu_items:
        response = requests.post(f"{BASE_URL}/menu", json=item)
        print(f"Created menu item: {item['name']} - Status: {response.status_code}")

def test_locations():
    # Sample locations in Dubai
    locations = [
        {
            "name": "Cafito Downtown",
            "name_ar": "كافيتو وسط المدينة",
            "address": "Dubai Mall, Downtown Dubai, Dubai, UAE",
            "address_ar": "دبي مول، وسط مدينة دبي، دبي، الإمارات العربية المتحدة",
            "phone": "+971 4 123 4567",
            "hours": "6:00 AM - 12:00 AM",
            "hours_ar": "٦:٠٠ ص - ١٢:٠٠ م",
            "latitude": 25.1972,
            "longitude": 55.2744
        },
        {
            "name": "Cafito Marina",
            "name_ar": "كافيتو المارينا",
            "address": "Dubai Marina Walk, Dubai Marina, Dubai, UAE",
            "address_ar": "ممشى دبي مارينا، دبي مارينا، دبي، الإمارات العربية المتحدة",
            "phone": "+971 4 234 5678",
            "hours": "7:00 AM - 11:00 PM",
            "hours_ar": "٧:٠٠ ص - ١١:٠٠ م",
            "latitude": 25.0657,
            "longitude": 55.1447
        },
        {
            "name": "Cafito JBR",
            "name_ar": "كافيتو جي بي آر",
            "address": "The Beach, JBR, Dubai, UAE",
            "address_ar": "الشاطئ، جي بي آر، دبي، الإمارات العربية المتحدة",
            "phone": "+971 4 345 6789",
            "hours": "6:30 AM - 1:00 AM",
            "hours_ar": "٦:٣٠ ص - ١:٠٠ ص",
            "latitude": 25.0875,
            "longitude": 55.1398
        }
    ]
    
    for location in locations:
        response = requests.post(f"{BASE_URL}/locations", json=location)
        print(f"Created location: {location['name']} - Status: {response.status_code}")

def test_get_apis():
    print("\n=== Testing GET APIs ===")
    
    # Test get all menu items
    response = requests.get(f"{BASE_URL}/menu")
    print(f"Get menu items - Status: {response.status_code}, Count: {len(response.json()) if response.status_code == 200 else 'Error'}")
    
    # Test get popular items
    response = requests.get(f"{BASE_URL}/menu/popular")
    print(f"Get popular items - Status: {response.status_code}, Count: {len(response.json()) if response.status_code == 200 else 'Error'}")
    
    # Test get by category
    response = requests.get(f"{BASE_URL}/menu/category/hot_drinks")
    print(f"Get hot drinks - Status: {response.status_code}, Count: {len(response.json()) if response.status_code == 200 else 'Error'}")
    
    # Test get locations
    response = requests.get(f"{BASE_URL}/locations")
    print(f"Get locations - Status: {response.status_code}, Count: {len(response.json()) if response.status_code == 200 else 'Error'}")

if __name__ == "__main__":
    print("=== Seeding Cafito Data ===")
    test_menu_items()
    test_locations()
    test_get_apis()