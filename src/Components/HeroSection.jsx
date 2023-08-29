import React from 'react'
import heropic from '../images/heropic.jpg'
function HeroSection() {
  return (
    <section className=" pb-12 bg-[#194054] ">
    <div className="mx-auto items-center justify-center px-6 flex flex-wrap sm:place-self-center " >
      <div className="items-center pt-5 font-bold text-start  sm:place-self-center">
        <p className='text-2xl   md:text-3xl'>Hello!<br /> My Name is Kiran Abrar <br />
          I'm a Web Developer</p>
        <p className=' text-md mt-1'>I am a react Developer with experience in building interactive<br />
          and responsive web applications using React.js</p>
        <button className="bg-[#cd4818] hover:bg-[#671e03] py-2 mt-7 px-4 rounded-full">
          <a  href="#About">More About Me</a> 
        </button>
      </div>
      <div className='md:px-11'>
        <img
          src={heropic}
          className="h-auto max-w-full mt-5 max-auto"
          alt="..." />
          </div>
          </div>

    </section>

  )
}

export default HeroSection