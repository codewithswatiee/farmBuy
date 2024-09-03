import Product from "./Product";
import './ProductsCard.css'

const products = [
  {
    id: 1,
    name: "Tomatoes",
    category: "Vegetables",
    price: 40.00,
    unit: "kg",
    availability: "In Stock",
    image: "/products.png"
  },
  {
    id: 2,
    name: "Potatoes",
    category: "Vegetables",
    price: 30.00,
    unit: "kg",
    availability: "Out of Stock",
    image: "/products.png"
  },
  {
    id: 3,
    name: "Apples",
    category: "Fruits",
    price: 120.00,
    unit: "kg",
    availability: "In Stock",
    image: "/products.png"
  },
  {
    id: 4,
    name: "Bananas",
    category: "Fruits",
    price: 60.00,
    unit: "dozen",
    availability: "In Stock",
    image: "/products.png"
  },
  {
    id: 5,
    name: "Milk",
    category: "Dairy",
    price: 50.00,
    unit: "litre",
    availability: "In Stock",
    image: "/products.png"
  },
  {
    id: 6,
    name: "Eggs",
    category: "Dairy",
    price: 70.00,
    unit: "dozen",
    availability: "Limited Stock",
    image: "/products.png"
  },
  {
    id: 7,
    name: "Wheat Flour",
    category: "Grains",
    price: 40.00,
    unit: "kg",
    availability: "In Stock",
    image: "/products.png"
  },
  {
    id: 8,
    name: "Rice",
    category: "Grains",
    price: 60.00,
    unit: "kg",
    availability: "Out of Stock",
    image: "/products.png"
  }
]



function ProductsCards() {
  return (
    <ul className="productList">
    {products.map((product) => <Product
        key={product.id}
        name={product.name}
        price={product.price}
        category={product.category}
        unit={product.unit}
        pictureUrl={product.image}
    />
    )}
</ul>
  )
}

export default ProductsCards
