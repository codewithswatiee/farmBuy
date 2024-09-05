import Product from "./Product";
import './ProductsCard.css'

const products = [
  {
    id: 1,
    name: "Organic Apples",
    description: "Fresh, crisp apples from a local orchard",
    farm: "Green Acres Farm",
    price: 40.00,
    unit: "kg",
    availability: "In Stock",
    image: "/products.png"
  },
  {
    id: 2,
    name: "Potatoes",
    description: "High-quality potatoes perfect for cooking and frying",
    farm: "Sunny Valley Farms",
    price: 30.00,
    unit: "kg",
    availability: "Out of Stock",
    image: "/products.png"
  },
  {
    id: 3,
    name: "Apples",
    description: "Juicy and sweet apples from premium orchards",
    farm: "Orchard Grove",
    price: 120.00,
    unit: "kg",
    availability: "In Stock",
    image: "/products.png"
  },
  {
    id: 4,
    name: "Bananas",
    description: "Ripe and fresh bananas sourced from local farms",
    farm: "Tropical Farms",
    price: 60.00,
    unit: "dozen",
    availability: "In Stock",
    image: "/products.png"
  },
  {
    id: 5,
    name: "Milk",
    description: "Pure and fresh milk from grass-fed cows and buffaloo",
    farm: "Dairyland Farms",
    price: 50.00,
    unit: "litre",
    availability: "In Stock",
    image: "/products.png"
  },
  {
    id: 6,
    name: "Eggs",
    description: "Free-range eggs from pasture-raised chickens",
    farm: "Cluckingham Palace",
    price: 70.00,
    unit: "dozen",
    availability: "Limited",
    image: "/products.png"
  },
  {
    id: 7,
    name: "Wheat Flour",
    description: "Stone-ground wheat flour for all your baking needs",
    farm: "Golden Fields Farm",
    price: 40.00,
    unit: "kg",
    availability: "In Stock",
    image: "/products.png"
  },
  {
    id: 8,
    name: "Rice",
    description: "Premium quality rice for everyday cooking",
    farm: "Rice Bowl Valley",
    price: 60.00,
    unit: "kg",
    availability: "Out of Stock",
    image: "/products.png"
  }
];




function ProductsCards() {
  return (
    <ul className="products-grid">
    {products.map((product) => <Product
        key={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
        farm={product.farm}
        unit={product.unit}
        imgUrl={product.image}
        stock={product.availability}
    />
    )}
</ul>
  )
}

export default ProductsCards
