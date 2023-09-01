import React from 'react'
import portfolio from '../images/portfolio.webp'
function About() {
  return (
    <section className="py-10 " id='About'>
    <h2 className="text-3xl font-bold ">About Me</h2>
    <div className='container mx-auto grid md:grid-cols-2 items-center justify-center px-8 md:justify-between ' >
      <div className=" mt-6 container mx-auto ">
        <p className=" text-left text-md">
            Hi, My Name is Kiran Abrar. I'm Passionate about creating intuitive user interfaces 
            with a stong focus on clean code and performance optimization.
            I am proficient in Frontend skills like React.js, Redux, Redux-Toolkit, Axios, Tailwind CSS, BootStrap and Css3. 
            Experienced in building responsive and interactive web applications.
            Check out my projects to see my skills in action. 
            Let's collaborate and build something amazing together!<br/>
            <button className="bg-[#cd4818] hover:bg-[#671e03] py-2 mt-7 px-4 rounded-md">
          <a  href="#About">Contact me</a> 
        </button>
           
        </p> 
      </div>
      <div className="md:px-11">
        <img
          src={portfolio}
          className="h-auto w-sm mt-4 px-8 max-auto rounded-md md:ml-auto  "
          alt="..." />
          </div>
          </div>
    </section>
  )
}

export default About




    
    
    
    
    
