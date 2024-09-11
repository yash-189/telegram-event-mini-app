import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation()

  console.log(location.pathname);
  return (
    <>
    {/* ========== HEADER ========== */}
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm ">
      <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[2rem]  flex items-center justify-between py-0 px-4 mx-auto">
        <div className="px-4 md:px-0 flex justify-between items-center">
          {/* Logo */}
          <div>
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="../templates/personal/index.html"
              aria-label="Preline"
            >
              
              logo
            </a>
          </div>
       
       
          
          
        </div>
        <div
          id="hs-navbar-header-floating"
          className=" hs-collapse overflow-hidden transition-all duration-300   "
          aria-labelledby="hs-navbar-header-floating-collapse"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3  md:mt-0 py-3 md:py-0 md:ps-7">
          <a
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-none"
              href="#"
              aria-current="page"
            >
{location?.pathname} 
            </a>

           
           
          </div>
        </div>
      </nav>
    </header>
    {/* ========== END HEADER ========== */}
  </>
  
  );
};

export default Header;
