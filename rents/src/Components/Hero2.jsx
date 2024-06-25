import React from 'react'
import ferrari from './img/ferrari-enzo.jpg'
import ford from './img/ford-raptor.jpg'
import minico from './img/mini-cooper.jpg' 
import bg from './img/5.jpg'
function Hero2() {
  return (
    <>
     
      <div className="hero2 h-[100vh] w-[100%]">

    <div className="hero22 border border-transparent h-[20%] w-full text-center ">
      <h1 className=' font-bold text-5xl pt-3'>Our Vehicle Fleet</h1>
      <p className=' text-lg py-3'>Driving your dreams to reality with an exquisite fleet of versatile vehicles for <br /> unforgettable journeys.

</p>
    </div>
    <div className="hero222 border border-transparent h-[80%] w-full flex justify-evenly items-center ">
           <div className="cardetail border border-gray-500 rounded-md h-[90%] w-[30%] shadow-gray-700 shadow-2xl">
            <div className="detail h-[50%] w-[98%] m-1 border border-black overflow-hidden rounded-lg">
              <img src={ferrari} alt="" className=' ferrari' />
            </div>
            <div className="detail border border-transparent h-[23%] w-full">
            <h1 className=' font-semibold text-3xl p-3'>Ferrari Enza</h1>
             <p className=' pt-5 text-lg ps-3 font-semibold'><i class="fa-duotone fa-user-tie  text-[rgb(30,203,21)] "></i> 5 <i class="fa-solid fa-briefcase ps-3 text-[rgb(30,203,21)] "></i> 2 <i class="fa-duotone fa-car ps-3 text-[rgb(30,203,21)] "></i> Exotic car </p>
          
            </div>
            <div className="detail border border-transparent h-[25%] w-full flex justify-between items-center">
            <p className=' text-[rgb(91,91,91)] text-lg ms-4 py-10'>Daily Rate From <br/> <span className=' ms-3 text-black font-bold text-3xl'>$167</span></p>
            <button className=' h-10 border border-transparent bg-[rgb(30,203,21)] rounded-[10px] text-white mx-5 px-3 font-semibold'>Rent Now </button>
            </div>
           </div>

           <div className="cardetail border border-gray-500 rounded-md h-[90%] w-[30%] shadow-gray-700 shadow-2xl">
            <div className="detail h-[50%] w-[98%] m-1 border border-transparent overflow-hidden rounded-lg">
              <img src={ford} alt="" className=' ferrari' />
            </div>
            <div className="detail border border-transparent h-[23%] w-full">
            <h1 className=' font-semibold text-3xl p-3'>Ford Raptor</h1>
             <p className=' pt-5 text-lg ps-3 font-semibold'><i class="fa-duotone fa-user-tie  text-[rgb(30,203,21)] "></i> 5 <i class="fa-solid fa-briefcase ps-3 text-[rgb(30,203,21)] "></i> 2 <i class="fa-duotone fa-car ps-3 text-[rgb(30,203,21)] "></i> Truck </p>
          
            </div>
            <div className="detail border border-transparent h-[25%] w-full flex justify-between items-center">
            <p className=' text-[rgb(91,91,91)] text-lg ms-4 py-10'>Daily Rate From <br/> <span className=' ms-3 text-black font-bold text-3xl'>$147</span></p>
            <button className=' h-10 border border-transparent bg-[rgb(30,203,21)] rounded-[10px] text-white mx-5 px-3 font-semibold'>Rent Now </button>
            </div>
           </div>

           <div className="cardetail border border-gray-500 rounded-md h-[90%] w-[30%] shadow-gray-700 shadow-2xl">
            <div className="detail h-[50%] w-[98%] m-1 border border-transparent overflow-hidden rounded-lg">
              <img src={minico} alt="" className=' ferrari' />
            </div>
            <div className="detail border border-transparent h-[23%] w-full">
            <h1 className=' font-semibold text-3xl p-3'>Mini Cooper</h1>
             <p className=' pt-5 text-lg ps-3 font-semibold'><i class="fa-duotone fa-user-tie  text-[rgb(30,203,21)] "></i> 5 <i class="fa-solid fa-briefcase ps-3 text-[rgb(30,203,21)] "></i> 2 <i class="fa-duotone fa-car ps-3 text-[rgb(30,203,21)] "></i> Hatchback </p>
          
            </div>
            <div className="detail border border-transparent h-[25%] w-full flex justify-between items-center">
            <p className=' text-[rgb(91,91,91)] text-lg ms-4 py-10'>Daily Rate From <br/> <span className=' ms-3 text-black font-bold text-3xl'>$238</span></p>
            <button className=' h-10 border border-transparent bg-[rgb(30,203,21)] rounded-[10px] text-white mx-5 px-3 font-semibold'>Rent Now </button>
            </div>
           </div>

           
         
          
    </div>

      </div>

      <div className="hero22222 h-[90vh] border border-transparent ">
        <div className="hmain h-[90%] border border-transparent flex mt-10 bg-[rgb(248,248,248)]">
          <div className="her2 h-[100%] w-[50%] border border-transparent overflow-hidden" >
            <img src={bg} alt=""  />
          </div>
          <div className="her2 h-[100%] w-[50%] border border-transparent" >
            <div className="data h-[100%] w-[100%] border border-transparent ">
              <div className="data1 h-[50%] w-full border border-transparent text-center ">
                <h1 className=' font-bold text-5xl mt-16'>Only Quality For Clients</h1>
                <button className=' mt-10 h-10 border border-transparent bg-[rgb(30,203,21)] rounded-[10px] text-white mx-5 px-3 font-semibold'>LUXURY</button> 
                <button className=' mt-10 mx-5 px-3 font-semibold hover:text-[rgb(30,203,21)]'>COMFORT</button>
                 <button className=' mt-10 mx-5 px-3 font-semibold hover:text-[rgb(30,203,21)]'>PRESTIGE</button>
              </div>
              <div className="data2 h-[50%] w-full border border-transparent ">
                <p className=' text-xl ps-16'>We offer a meticulously curated collection of the most sought-after <br /> luxury vehicles on the market. Whether you prefer the sporty allure of <br /> a high-performance sports car, the sophistication of a sleek and <br /> luxurious sedan, or the versatility of a premium SUV, we have the <br /> perfect car to match your discerning taste.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="advertice h-[50vh] w-full border border-transparent flex">
          <div className="add h-full w-[25%] border border-transparent ">
            <h1 className=' text-5xl ps-10 pt-16'>Explore the <br /> world with <br /> comfortable car</h1>
          </div>
          <div className="add h-full w-[25%] border border-transparent  ">
            <div className="addm w-full h-[40%] border border-transparent">
            <i class="fa-solid fa-trophy bg-[rgb(30,203,21)] text-6xl text-white p-3 m-5 mt-10"></i>
            </div>
            <div className="addm w-full h-[60%] border border-transparent">
              <h1 className=' font-bold text-2xl ms-5 mt-5'>First Class Services</h1>
              <p className='ms-5 py-3 text-lg'>Where luxury meets exceptional care, <br /> creating unforgettable moments and <br /> exceeding your every expectation.</p>
            </div>
          </div>
          <div className="add h-full w-[25%] border border-transparent ">
          <div className="addm w-full h-[40%] border border-transparent">
            <i class="fa-regular fa-road bg-[rgb(30,203,21)] text-6xl text-white p-3 m-5 mt-10"></i>
            </div>
            <div className="addm w-full h-[60%] border border-transparent">
              <h1 className=' font-bold text-2xl ms-5 mt-5'>24/7 road assistance</h1>
              <p className='ms-5 py-3 text-lg'>Where luxury meets exceptional care, <br /> creating unforgettable moments and <br /> exceeding your every expectation.</p>
            </div>
          </div>
          <div className="add h-full w-[25%] border border-transparent ">
          <div className="addm w-full h-[40%] border border-transparent">
          <i class="fa-solid fa-location-dot bg-[rgb(30,203,21)] text-6xl text-white p-3 m-5 mt-10"></i>
         
            </div>
            <div className="addm w-full h-[60%] border border-transparent">
              <h1 className=' font-bold text-2xl ms-5 mt-5'>Free Pick-Up & Drop-Off</h1>
              <p className='ms-5 py-3 text-lg'>Where luxury meets exceptional care, <br /> creating unforgettable moments and <br /> exceeding your every expectation.</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Hero2
