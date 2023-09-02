import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"

const Home = () => {
  return (
    <div className='wrapper flex '>
      <div className=' content '>

        <h1 className='text-red-500 '>Govindas</h1>
        <p>Here you will get pure veg delights</p>
         <div className='button-wrapper flex justify-around'>
            <Link className='link' to="/login">Login</Link>
            <Link className='link' to="/register">Register</Link>

         </div>

      </div>

    </div>
  )
}

export default Home