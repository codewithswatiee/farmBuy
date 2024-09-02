import React from 'react'
import Button from '../Button'

function FarmerCard({name, age, location, crops, farmSize, pictureUrl}) {
  return (
    <div>
      <img href={pictureUrl} alt="Farmer Picture" />
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>Crops: {crops}</p>
      <p>Farm Size: {farmSize}</p>
      <Button>Send a Request</Button>
    </div>
  )
}

export default FarmerCard
