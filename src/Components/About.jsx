import React from 'react'
import portfolio from '../images/portfolio.webp'
function About() {
  return (
    <section className="py-10 px-5" id='About'>
    <h2 className="text-3xl font-bold ">Contact Me</h2>
    <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between' >
      <div className="about-info mt-6 container mx-auto w-96 ">
        <p className=" text-left ms-2 text-md px-auto">
            Hi, My Name Is Kiran Abrar. I am a
            Frontend Developer. I can build beautifull websites with React JS and
            Tailwind CSS. I am proficient in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, BootStrap and Css3.<br/>
         Email: <b>kiran.cs577@gmail.com</b><br/>
          Contact: <b>+923176834506</b><br/>
          Address: <b>Burewala,Vehari</b>
        </p> 
      </div>
      <div className="md:px-11">
        <img
          src={portfolio}
          className="h-auto max-w-sm mt-4 px-8 max-auto md:ml-auto "
          alt="..." />
          </div>
          </div>
    </section>
  )
}

export default About




    
    
    
    
    
