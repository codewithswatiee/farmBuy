import React from 'react'
import Button from '../Button'
import '././FarmCard.css'
function FarmerCard({name, age, location, crops, farmSize, pictureUrl}) {
  return (
    <div className='farmer'>
      <img src={pictureUrl} alt="Farmer" />
      <div className='info'>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Location: {location}</h2>
        <h2>Crops: {crops.join(", ")}</h2>
        <h2>Farm Size: {farmSize} acres</h2>
      </div>
      <Button className='button'>Send a Request</Button>
    </div>
  )
}

export default FarmerCard
