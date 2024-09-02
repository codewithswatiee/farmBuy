import FarmerCard from "./FarmerCard"
import './FarmerCards.css'

const farmers = [
    {
        id: 1,
        name: "Ravi Kumar",
        age: 45,
        location: "Maharashtra",
        crops: ["Wheat", "Sugarcane", "Soybean"],
        farm_size_acres: 10,
        picture_url: '/farmer.png'
    },
    {
        id: 2,
        name: "Sita Devi",
        age: 38,
        location: "Punjab",
        crops: ["Rice", "Wheat", "Mustard"],
        farm_size_acres: 15,
        picture_url: '/farmer.png'
    },
    {
        id: 3,
        name: "Ram Singh",
        age: 50,
        location: "Uttar Pradesh",
        crops: ["Potato", "Tomato", "Onion"],
        farm_size_acres: 8,
        picture_url: '/farmer.png'
    },
    {
        id: 4,
        name: "Lakshmi Patel",
        age: 42,
        location: "Gujarat",
        crops: ["Cotton", "Groundnut", "Bajra"],
        farm_size_acres: 12,
        picture_url: '/farmer.png'
    },
    {
        id: 5,
        name: "Hari Prasad",
        age: 60,
        location: "Rajasthan",
        crops: ["Wheat", "Barley", "Gram"],
        farm_size_acres: 20,
        picture_url: '/farmer.png'
    },
    {
        id: 6,
        name: "Palak Devi",
        age: 48,
        location: "Punjab",
        crops: ["Wheat", "Mustard"],
        farm_size_acres: 25,
        picture_url: '/farmer.png'
    }
]

function FarmerCards() {
  return (
    <ul className="farmerList">
        {farmers.map((farmer) => <FarmerCard
            key={farmer.id}
            name={farmer.name}
            age={farmer.age}
            location={farmer.location}
            crops={farmer.crops}
            farmSize={farmer.farm_size_acres}
            pictureUrl={farmer.picture_url}
        />
        )}
    </ul>
  )
}

export default FarmerCards
