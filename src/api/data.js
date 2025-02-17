export const productsData = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    description:
      "A comfortable and versatile white t-shirt made from 100% cotton",
    type: "female",
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    price: 29.99,
    images: [
      require("../assets/images/tshirt-women-1.jpg"),
      require("../assets/images/tshirt-women-2.jpg"),
      require("../assets/images/tshirt-women-3.jpg"),
    
    ],
    rating: 3,
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    description: "Beautiful floral print dress perfect for summer occasions",
    type: "female",
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    price: 59.99,
    images: [
      require("../assets/images/flower-women-1.jpg"),
      require("../assets/images/flower-women-2.jpg"),
      require("../assets/images/flower-women-3.jpg"),
    ],
    rating: 4.6,
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    description: "Classic blue slim fit jeans with stretch comfort",
    type: "male",
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    price: 79.99,
    images: [
      require("../assets/images/jean-male.jpg"),
      require("../assets/images/men-pant-1.jpg"),
      require("../assets/images/men-pant-2.jpg"),
    ],
    rating: 5,
  },
  {
    id: 4,
    name: "Leather Jacket",
    description: "Premium leather jacket with quilted lining",
    type: "male",
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    price: 199.99,
    images: [
      require("../assets/images/leather-jacket.jpg"),
      require("../assets/images/leather-jacket-1.jpg"),
      require("../assets/images/leather-jacket-2.jpg"),
    ],
    rating: 4.7,
  },
  {
    id: 5,
    name: "Silk Blouse",
    description: "Elegant silk blouse with button-up front",
    type: "female",
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    price: 89.99,
    images: [
      require("../assets/images/silk-blouse.jpg"),
      require("../assets/images/silk-blouse-1.jpg"),
      require("../assets/images/silk-blouse-2.jpg"),
    ],
    rating: 3.5,
  },
];

export const  bannerData = [
  {
    id: "1",
    title: "New Collection",
    description: "Discount 50% for\nthe first transaction",
    image: require("../assets/images/women.jpg"),
    buttonText: "Shop Now",
  },
  {
    id: "2",
    title: "Summer Sale",
    description: "Get amazing discounts\non summer collection",
    image: require("../assets/images/shoppingBanner.jpg"),
    buttonText: "Shop Now",
  },
];