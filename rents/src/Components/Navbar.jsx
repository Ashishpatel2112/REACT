import React from 'react'
import img1 from './img/rentlogo.png'
function Navbar() {
  return (
    <>
      <div className="navbar bg-transperant w-[100%] h-[100px] flex border border-transparent">
        <div className="n1 h-[inherit] w-[20%] border border-1 border-transparent flex justify-center items-center">
            <a href=""><img src={img1} alt="" /></a>
        </div>
        <div className="n2 h-[inherit] w-[60%] border border-1 border-transparent flex justify-evenly items-center">
          <a href="" className=' hover:font-bold text-lg'>Home  <i class="fa-solid fa-chevron-down"></i></a>
          <a href="" className=' hover:font-bold text-lg'>Cars  <i class="fa-solid fa-chevron-down"></i></a>
          <a href="" className=' hover:font-bold text-lg'>Booking  <i class="fa-solid fa-chevron-down"></i></a>
          <a href="" className=' hover:font-bold text-lg'>My Account  <i class="fa-solid fa-chevron-down"></i></a>
          <a href="" className=' hover:font-bold text-lg'>Pages  <i class="fa-solid fa-chevron-down"></i></a>
          <a href="" className=' hover:font-bold text-lg'>News  <i class="fa-solid fa-chevron-down"></i></a>
          <a href="" className=' hover:font-bold text-lg'>Elements  <i class="fa-solid fa-chevron-down"></i></a>
        </div>
        <div className="n3 h-[inherit] w-[20%] border border-1 border-transparent flex items-center">
          <button className='h-10 border border-transparent bg-[rgb(30,203,21)] rounded-[10px] text-white mx-5 px-3 font-semibold '>Sign in</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
