import React from 'react'
import foodieproject from '../images/projectimages/recipe.png';
import weatherproject from '../images/projectimages/weatherproject.png';
import resumeprojectt from '../images/projectimages/resume.png';
import cocktailprojectt from '../images/projectimages/cocktail.png'
import crudprojectt from '../images/projectimages/crud.png';
import ecommerce from '../images/projectimages/ecommerce.png';
import portfolioprojectt from '../images/projectimages/portfolio.png';
function Portfolios() {
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
      desc: " Recipe-searching App.Used TheMealDB API for meals. Built with React, Bootstrap and plain CSS ",
      live: "https://kiranabrar.github.io/Recipe-App",
      code: "https://github.com/Kiranabrar/Recipe-App",
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
    <section className="py-10 px-3" id='Portfolios'>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold ">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border relative bg-[#194054] border-gray-300 rounded-lg p-4"
            >
              <img src={project.img} alt=''/>
              <h3 className="text-xl my-2 font-bold">{project.title}</h3>
              <p className="my-2 ">{project.desc}</p>
              <div className="mx-auto mt-5 mb-3 ">
                  <a
                    href={project.live}
                    className="px-5 py-2  bg-red-500 hover:bg-red-800 mr-6 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-800 ml-6 font-bold"
                  >
                    Code
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolios