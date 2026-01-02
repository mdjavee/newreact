import React from 'react'
import hero from '../assets/hero.jpg'
const Hero = () => {
  return (
    <>
    <div className="Hero    mt-15 ">
      <h3 className='text-center text-2xl font-bold text-red-100'>Elevate Your LifeStyle</h3>
      <p    className='Herodesc text-amber-100 text-sm text-center mx-9 pt-6 font-light'>From Fashion To Gadgets, Everything You need is Just a Click Away</p>
      </div>
      <div className="div p-9  mt-5 flex justify-center ">
        <img src={hero} alt="" className='max-w-full border-4 border-red-900 rounded-md' />
      </div>
      </>
  )
}

export default Hero