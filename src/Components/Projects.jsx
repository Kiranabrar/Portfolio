import React from 'react'
import foodieproject from '../images/projectimages/recipe.png';
import weatherproject from '../images/projectimages/weatherproject.png';
import resumeprojectt from '../images/projectimages/resume.png';
import cocktailprojectt from '../images/projectimages/cocktail.png'
import crudprojectt from '../images/projectimages/crud.png';
import ecommerce from '../images/projectimages/ecommerce.png';
import portfolioprojectt from '../images/projectimages/portfolio.png';
const Projects = () => {
  const projects = [
   
    {
      img: portfolioprojectt,
      title: "Personal Portfolio",
      desc: "Responsive & fully functional Portfolio App. Used Tailwind CSS for Styles and React JS on the frontend",
      live: "https://kiranabrar.github.io/E-commerce-store/",
      code: "https://github.com/Kiranabrar/E-commerce-store.git",
    },
    {
      img: resumeprojectt,
      title: "Resume Portfolio",
      desc: "Simple & responsive Resume Portfolio App built with CSS and React JS ",
      live: "https://kiranabrar.github.io/resume-portfolio/",
      code: "https://github.com/Kiranabrar/resume-portfolio.git",
    },
     {
      img: ecommerce,
      title: "E-Commerce Store",
      desc: " Responsive and Interactive E-commerce App. Used fakestore API for Products.Built wwith CSS, ReactJS and Redux-toolkit on the frontend",
      live: "https://kiranabrar.github.io/E-commerce-store/",
      code: "https://github.com/Kiranabrar/E-commerce-store.git",
    },
     {
      img: weatherproject,
      title: "Weather App",
      desc: "Built with Bootstrap,React JS, used Openweathermap API for search weather details",
      live: "https://kiranabrar.github.io/weather-app/",
      code: "https://github.com/Kiranabrar/weather-app",
    },
   
   
    {
      img: cocktailprojectt,
      title: "Cocktail Website",
      desc: " Responsive and functional Cocktail Website. Used thecocktaildb API in project.Simple CSS Bootstrap for styling & React, Redux-toolkit on the frontend",
      live: "https://kiranabrar.github.io/cocktail-website/",
      code: "https://github.com/Kiranabrar/cocktail-website.git",
    },
   
    
    {
      img: foodieproject,
      title: "Recipe-Flavoures",
      desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
      live: "https://kiranabrar.github.io/Foodie-app/",
      code: "https://github.com/Kiranabrar/Foodie-app",
    },
    {
      img: crudprojectt,
      title: "Crud Operations",
      desc: "CRUD App. Used mock API for CRUD operations, Bootstrap & React on the frontend",
      live: "https://kiranabrar.github.io/crud-operations/",
      code: "https://github.com/Kiranabrar/crud-operations.git",
    },
    
   
   
      ]; 
  return (
    <section className="bg-white px-5 py-10" id="projects">
    <div className=" mb-5">
          <h2 className="text-3xl font-bold mb-5 pb-2">
            Projects
          </h2>
          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <>
            <div className="relative" key={i}>
            
              <img src={project.img} alt={project.title} />
            
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-gray-200  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 ">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
           
            </>
          );
        })}
      </div>
    </section>
  )
}

export default Projects