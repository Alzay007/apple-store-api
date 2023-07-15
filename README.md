# API for [Apple Store](https://github.com/Alzay007/Apple-shop)

## Base URL

The base URL for all API endpoints is: `http://your-server-url/`

## Docs

### /goods

`GET /goods` - Use this endpoint to get all the goods.

Request example:
```sh
GET /goods
```

Response example:
```sh
[
  {
    id: 17,
    itemId: "apple-iphone-xs-max-256gb-silver",
    category: "phones",
    name: "Apple iPhone XS Max 256GB Silver",
    fullPrice: 1080,
    rating: 4.4,
    screen: "6.5' OLED",
    capacity: "256GB",
    color: "silver",
    ram: "4GB",
    year: 2018,
    image: "img/phones/apple-iphone-xs-max/silver/00.webp"
  },
  {
    id: 34,
    itemId: "apple-iphone-xs-max-256gb-gold",
    category: "phones",
    name: "Apple iPhone XS Max 256GB Gold",
    fullPrice: 1080,
    rating: 4.3,
    screen: "6.5' OLED",
    capacity: "256GB",
    color: "gold",
    ram: "4GB",
    year: 2018,
    image: "img/phones/apple-iphone-xs-max/gold/00.webp"
  }
]
```
<br/>

`GET /goods/:productId` - Use this endpoint to get the product's details.

Request example:
```sh
GET /goods/apple-ipad-pro-11-2021-2tb-silver
```

Response example:
```sh
{
  "id": "apple-ipad-pro-11-2021-2tb-silver",
  "namespaceId": "apple-ipad-pro-11-2021",
  "name": "Apple iPad Pro 11 (2021) 2TB Silver",
  "capacityAvailable": [
    "128GB",
    "256GB",
    "512GB",
    "1TB",
    "2TB"
  ],
  "capacity": "2TB",
  "priceRegular": 999,
  "priceDiscount": 939,
  "colorsAvailable": [
    "spacegray",
    "silver"
  ],	
  "color": silver",
  "images": [
    "img/tablets/apple-ipad-pro-11-2021/silver/00.webp",
    "img/tablets/apple-ipad-pro-11-2021/silver/01.webp",
    "img/tablets/apple-ipad-pro-11-2021/silver/02.webp"
  ],
  "description": [
    {
      "text": [
        "Experience incredible power and performance with the Apple iPad Pro 11. With the M1 chip, it delivers a new level of performance, making it faster and more efficient than ever before.",
        "Whether you're editing photos, designing artwork, or multitasking with demanding apps, the iPad Pro 11 handles it all with ease."
      ],
      "title": "Powerful Performance"
    },
    {
      "text": [
        "Enjoy a vibrant and immersive visual experience on the iPad Pro 11's Liquid Retina display. With ProMotion technology and True Tone, the display adapts to your environment, providing smooth scrolling, precise color accuracy, and incredible detail.",
        "From watching movies to editing videos, the iPad Pro 11's display brings your content to life with stunning clarity."
      ],
      "title": "Stunning Liquid Retina Display"
    },
    {
      "text": [
        "Capture stunning photos and videos with the iPad Pro 11's advanced camera system. Featuring a 12MP Ultra Wide front camera and a 12MP Wide rear camera with LiDAR scanner, you can take high-quality shots and enjoy augmented reality experiences.",
        "Whether you're video calling, scanning documents, or recording 4K videos, the iPad Pro 11's camera system delivers exceptional performance."
      ],
      "title": "Versatile Camera System"
    },
  ],
  "screen": "11' Liquid Retina",
  "resolution": "2388x1668",
  "processor": "Apple M1",
  "ram": "16GB",
  "camera": "12MP + 12MP",
  "zoom": "Digital zoom up to 5x",
  "cell": [
    "Not applicable"
  ]	
}
```
<br/>

## Category Endpoints

### /phones

`GET /phones` - Use this endpoint to get all phones with details.

Request example:
```sh
GET /goods
```
