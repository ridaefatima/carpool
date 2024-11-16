import React from 'react'
import { Link } from 'react-router-dom'
import Map from './map'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4'>
        <h1 className='text-7xl font-bold text-[#00d59a] text-center'>Maps</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-1 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#386e4f80]'>
                <p className='text-center text-1xl font-bold text-white my-6'>Rida needs help</p>
                <Map/>
            </div> 
        </div>
    </div>
  )
}

export default Cards;