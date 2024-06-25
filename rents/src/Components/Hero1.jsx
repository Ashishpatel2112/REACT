import React from 'react'
import bgimg from "./img/7.jpg"
import car2 from "./img/car-2.png"
 function Hero1() {
  return (
    <>
     <div className="hero1body h-[100vh] w-[100%] flex   ">
        <div className="heros1  h-[100%] w-[50%] flex justify-center items-center ">
          <div className="text h-[350px] w-[600px] border border-transparent ">
          <h2 className='text-[rgb(30,203,21)] text-2xl'>Plan your trip now</h2>
        <h1 className=' text-6xl font-bold pt-3'>Explore the world with comfortable car</h1>
        <p className=' text-lg py-3'>Embark on unforgettable adventures and discover the world in unparalleled comfort and style with our fleet of exceptionally comfortable cars.</p>
        <button className=' h-10 border border-transparent bg-[rgb(30,203,21)] rounded-[10px] text-white mx-5 px-3 font-semibold '>Choose a Car</button>
        <button className=' h-10 border border-transparent bg-black px-3 rounded-[10px] text-white font-semibold '>Get the App</button>
        </div>
        </div>
      <div className="heros2 h-[100%] w-[60%] border border-transparent ">
          <img src={car2} alt="" className='mt-[200px] ms-[0px] ' />
        </div>
    </div> 
    </>
  )
}

export default Hero1
