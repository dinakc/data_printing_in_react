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
      "hobbies": ["Reading", ",gardening", ",cooking"],
      "bio": "Anu is a passionate learner who enjoys exploring new technologies."
    },
    {
      "name": "Deena",
      "age": 27,
      "hobbies": ["Gaming", ",hiking", ",photography"],
      "bio": "Deena is a creative individual who loves expressing herself through music and capturing moments with his camera."
    },
    {
      "name": "Urusha",
      "age": 23,
      "hobbies": ["Painting", ",writing", ",soccer"],
      "bio": "Urusha is an artist at heart, always seeking inspiration from various forms of art."
    },
    {
      "name": "Nicky",
      "age": 29,
      "hobbies": ["Swimming", ",traveling", "'programming"],
      "bio": "Nicky is an adventurer who is passionate about coding and exploring the world at the same time."
    }
  ]
  
  const displayProfile = people.map(getEachInfo)
  return (
    <>

    <div className='header'>
    <a href="Home">Home</a>
    <a href="Character">Character</a>
    <a href="Settings">Settings</a>
    </div>
    <h className='topic'>Sims Characters</h>
    <div className='individual'>{displayProfile}</div>
    <div className='footer'> Copyright@2022</div>
  
  
    

     
    </>
  )
}

export default App
