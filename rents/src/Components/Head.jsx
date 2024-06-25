import React from 'react'

function head() {
  return (
    <>
      <div className="head w-full bg-black h-[45px] flex">
        <div className="h1 border border-1 border-transparent w-[50%] text-white flex justify-start items-center ps-20">
            <a href=""><i class="fa-solid fa-phone text-[rgb(30,203,21)] pe-2 "></i>+208 333 9296</a>
            <a href=""><i class="fa-solid fa-envelope text-[rgb(30,203,21)] ps-10 pe-2 "></i>contact@rentaly.com</a>
            <a href=""><i class="fa-regular fa-clock text-[rgb(30,203,21)] ps-10 pe-2"></i>Mon - Fri 08.00 - 18.00</a>
        </div>
        <div className="h2 border border-1 border-transparent w-[50%] text-white text-center  ">
            <a href=""><i class="fa-brands fa-facebook-f ms-[45%] mt-3 px-3"></i></a>
            <a href=""><i class="fa-brands fa-twitter mt-3 px-3"></i></a>
            <a href=""><i class="fa-brands fa-youtube mt-3 px-3"></i> </a>
            <a href=""><i class="fa-brands fa-pinterest mt-3 px-3"></i></a>
            <a href=""><i class="fa-brands fa-instagram mt-3 px-3"></i></a>
        </div>
      </div>

    </>
    
  )
}

export default head
