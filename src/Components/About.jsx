import React from 'react'
import portfolio from '../images/portfolio.webp'
function About() {
  return (
    <section className="py-10 " id='About'>
    <h2 className="text-3xl font-bold ">Contact Me</h2>
    <div className='container mx-auto grid md:grid-cols-2 items-center justify-center px-8 md:justify-between ' >
      <div className=" mt-6 container mx-auto ms-2 px-5">
        <p className=" text-left text-md">
            Hi, My Name is Kiran Abrar. I'm Passionate about creating intuitive user interfaces using React JS and Tailwind CSS, 
            with a stong focus on clean code and performance optimization.
            Eager to learn and grow in the field. 
            I am proficient in Frontend skills like React.js, Redux, Redux-Toolkit, Axios, Tailwind CSS, BootStrap and Css3. 
            Experienced in building responsive and interactive web applications, 
            Check out my projects to see my skills in action. Let's collaborate and build something amazing together!<br/>
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




    
    
    
    
    
