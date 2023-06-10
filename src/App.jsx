import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getEachInfo from './array'

function App() {
  const people =[
    {
      "name": "Anu",
      "age": 25,
      "hobbies": ["Reading", "Gardening", "Cooking"],
      "bio": "Alice is a passionate learner who enjoys exploring new technologies."
    },
    {
      "name": "Deena",
      "age": 27,
      "hobbies": ["Playing guitar", "Hiking", "Photography"],
      "bio": "Bob is a creative individual who loves expressing himself through music and capturing moments with his camera."
    },
    {
      "name": "Urusha",
      "age": 23,
      "hobbies": ["Painting", "Writing", "Soccer"],
      "bio": "Charlie is an artist at heart, always seeking inspiration from various forms of art."
    },
    {
      "name": "Nicky",
      "age": 29,
      "hobbies": ["Swimming", "Traveling", "Programming"],
      "bio": "David is an adventurer who is passionate about coding and exploring the world at the same time."
    }
  ]
  
  const displayProfile = people.map(getEachInfo)
  return (
    <>
    <div className='main'>
    <div className='header'></div>
    <div className='individual'>{displayProfile}
      <h1> {}</h1>
    </div>
  
    </div>
    

     
    </>
  )
}

export default App
