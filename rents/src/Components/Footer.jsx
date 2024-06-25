import React from 'react'

function Footer() {
  return (
    <>
      
      <div className="foot h-20 border border-transparent bg-[rgb(24,24,24)] flex justify-center items-center overflow-hidden  ">
        <marquee behavior="" direction=""  className=" text-[rgb(30,203,31)] text-4xl font-bold " > Sedan  Hatchback  Crossover Suv Sport-Car Coupe Minivans Truck Exotic-Cars</marquee>
      </div>

      <div className="footer h-[70vh] bg-[rgb(18,18,18)] ">
        <div className="f1 border border-transparent w-full h-[85%] flex">
          <div className="f11 border border-transparent text-white h-full w-[25%]">
              <h1 className=' font-bold text-xl ms-[20%] mt-20'>About Rentaly</h1>
              <p className=' text-white opacity-50 ms-[20%] mt-3'>Where quality meets affordability. We <br /> understand the importance of a smooth <br /> and enjoyable journey without the burden <br /> of excessive costs. That's why we have <br /> meticulously crafted our offerings to <br /> provide you with top-notch vehicles at <br /> minimum expense.</p>
          </div>
          <div className="f11 border border-transparent text-white h-full w-[25%]">
            <h1 className=' pb-5 font-bold text-xl mt-[80px] ms-10 '>Contact Info</h1>
            <p ><i class="fa-solid fa-location-dot text-[rgb(30,203,31)] mx-3 py-2 ms-10 "></i> 08 W 36th St, New York, NY 10001</p>
            <p ><i class="fa-solid fa-phone text-[rgb(30,203,31)] mx-3 py-2 ms-10 "></i> +1 333 9296</p>
            <a href="" className=' hover:text-[rgb(30,203,31)]'> <i class="fa-regular fa-envelope text-[rgb(30,203,31)] mx-3 py-2 ms-10"></i> contact@example.com</a> <br />
            <a href="" className=' hover:text-[rgb(30,203,31)]'> <i class="fa-regular fa-file-arrow-down text-[rgb(30,203,31)] mx-3 ms-10"></i> Download Brochure</a>
          </div>
          <div className="f11 border border-transparent h-full w-[15%]  text-white">
            <h1 className='mt-[80px] font-bold text-xl py-2'>Quick Links</h1>
            <a href="" className='hover:text-[rgb(30,203,31)] py-2'>About</a><br/>
            <a href="" className='hover:text-[rgb(30,203,31)] py-2'>Blog</a><br/>
            <a href="" className='hover:text-[rgb(30,203,31)] py-2'>Careers</a><br/>
            <a href="" className='hover:text-[rgb(30,203,31)] py-2'>News</a><br/>
            <a href="" className='hover:text-[rgb(30,203,31)] py-2'>Partners</a>
          </div>
          <div className="f11 border border-transparent h-full w-[35%] text-white">
            <h1 className='font-bold mt-[80px] text-xl ms-5 '>Social Network</h1>
            <a href=""><i class="fa-brands fa-facebook-f text-[rgb(30,203,31)] bg-[rgb(42,42,42)] rounded-lg p-3 m-5 px-4 text-lg hover:bg-white"></i></a>
            <a href=""><i class="fa-brands fa-twitter text-[rgb(30,203,31)] bg-[rgb(42,42,42)] rounded-lg p-3 text-lg hover:bg-white"></i></a>
            <a href=""><i class="fa-brands fa-linkedin-in text-[rgb(30,203,31)] bg-[rgb(42,42,42)] rounded-lg p-3 m-5 text-lg hover:bg-white "></i></a>
            <a href=""><i class="fa-brands fa-pinterest-p text-[rgb(30,203,31)] bg-[rgb(42,42,42)] rounded-lg p-3 me-5 text-lg hover:bg-white"></i></a>
            <a href=""><i class="fa-solid  fa-rss text-[rgb(30,203,31)] bg-[rgb(42,42,42)] rounded-lg p-3 text-lg hover:bg-white"></i></a>
          </div>
        </div>
        <div className="f2 border border-transparent w-full h-[15%] border-t-2 border-t-slate-700 flex items-center text-lg text-white ">
          <h1 className='mx-10'>Copyright 2024 - Rentaly by Ashish Patel</h1>
          <a href="" className=' hover:text-[rgb(30,203,31)] ms-[45%] me-10 '>Terms & Conditions</a>
          <a href="" className=' hover:text-[rgb(30,203,31)] '>Privacy Policy</a>
        </div>
      </div>

    </>
  )
}



export default Footer
