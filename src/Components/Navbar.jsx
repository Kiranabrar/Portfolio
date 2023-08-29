  import React from 'react'
  function Navbar() {
  return (
  <div>
    <div className="min-h-full">
      <nav className="bg-[#042231] ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h2 className="text-white text-lg font-bold"> Resume Portfolio</h2>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
           
                  <a href="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                  <a href="#About" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
                  <a href="#Skills" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Skills</a>
                  <a href="#Portfolios" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Portfolios</a>
                  <a href="#Contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
             
                </div>
              </div>
            </div>
        
          </div>
        </div>
  
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
           
            <a href="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
            <a href="#About" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
            <a href="#Skills" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Skills</a>
            <a href="#Portfolios" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Portfolio</a>
            <a href="#Contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
          </div>
       
        </div>
      </nav>
    </div>
  </div>
  )
      }
  export default Navbar

