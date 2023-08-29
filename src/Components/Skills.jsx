import React from 'react'
import JS from '../images/skillslogo/JSlogo.png'
import react from '../images/skillslogo/reactlogo.png'
import html from '../images/skillslogo/html5logo.png'
import css from '../images/skillslogo/csslogo.png'
import tailwind from '../images/skillslogo/tailwindlogo.png'
import boot from '../images/skillslogo/bootstraologo.png'
function Skills() {
  const skills = [
    {
      logo: react,
      name: "react JS",
      count: "70",
      level: "Intermediate"
      
    },
    {
      logo: JS,
      name: "JavaScript",
      count: "60",
      level: "beginner"

    },
    {
      logo: html,
      count: "90",
      name: "HTML5",
      level: "Advanced"
    },
    {
      logo: css,
      name: "CSS3",
      count: "80",
      level: "Intermediate",
    },
    {
      logo: tailwind,
      name: "Tailwind CSS",
      count: "50",
      level: "Beginner"
    },
    {
      logo: boot,
      name: "BootStrap",
      count: "70",
      level: "Intermediate"
    },
  ];

  return (
    <section className="py-10" id='Skills'>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold ">Skills</h2>

        <ul className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 mx-5">
          {skills.map((skill, index) => (
            <li key={index} className="py-2 px-4 bg-[#194054] rounded-lg">
           <div> 
           <p className='text-md mt-2 '>{skill.name}</p>
           <img className='mx-auto w-16 h-16' src={skill.logo} alt="..."
           />
           <p className='text-md mt-1 '>{skill.level}</p>
              </div>
            </li>

          ))}
        </ul>

     
      </div>
    
    </section>
  )
}

export default Skills