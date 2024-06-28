import { NavLink } from "react-router-dom"
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <header className="header">
      <NavLink to='/'>
        <div className="w-30 rounded-lg border border-black bg-transparent p-2 text-center shadow-lg bg-gradient-to-b from-black to-gray-800 text-white flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div>
              <h5 className="text-base font-bold blue-gradient_text">Karthikeyan J</h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Developer | Designer</p>
            </div>
          </div>
        </div>
      </NavLink>
      <nav className="flex text-lg font-medium">
      <div className="hidden md:flex space-x-4 gap-5">
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black-500'}>
                    About
                </NavLink>
                <NavLink to='/resume' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black-500'}>
                    Resume
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black-500'}>
                    Projects
                </NavLink>
                <NavLink to='/skills' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black-500'}>
                    Skills
                </NavLink>
                
            </div>

            {/* Mobile navigation toggle */}
            <div className="md:hidden">
                <button className="text-black-500 focus:outline-none" onClick={toggleMenu}>
                    Menu
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute top-0 right-0 w-full py-4 shadow-lg backdrop-blur-md bg-opacity-50 bg-white border border-gray-200 rounded-lg">
                  <NavLink 
                        to='/' 
                        className={({ isActive }) => 
                            isActive ? 'text-blue-500 bg-white- block text-center py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out' : 
                            'text-blue-500 block text-center py-2 px-4 rounded-md hover:bg-gray-900 hover:text-blue-500 transition-all duration-300 ease-in-out'
                        } 
                        onClick={toggleMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to='/about' 
                        className={({ isActive }) => 
                            isActive ? 'text-blue-500 bg-white block text-center py-2 px-4 rounded-md shadow-md transition-all duration-300 ease-in-out' : 
                            'text-blue-500 block text-center py-2 px-4 rounded-md hover:bg-gray-900 hover:text-blue-500 transition-all duration-300 ease-in-out'
                        } 
                        onClick={toggleMenu}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to='/resume' 
                        className={({ isActive }) => 
                            isActive ? 'text-blue-500 bg-white block text-center py-2 px-4 rounded-md shadow-md transition-all duration-300 ease-in-out' : 
                            'text-blue-500 block text-center py-2 px-4 rounded-md hover:bg-gray-900 hover:text-blue-500 transition-all duration-300 ease-in-out'
                        } 
                        onClick={toggleMenu}
                    >
                        Resume
                    </NavLink>
                    <NavLink 
                        to='/projects' 
                        className={({ isActive }) => 
                            isActive ? 'text-blue-500 bg-white block text-center py-2 px-4 rounded-md shadow-md transition-all duration-300 ease-in-out' : 
                            'text-blue-500 block text-center py-2 px-4 rounded-md hover:bg-gray-900 hover:text-blue-500 transition-all duration-300 ease-in-out'
                        } 
                        onClick={toggleMenu}
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to='/skills' 
                        className={({ isActive }) => 
                            isActive ? 'text-blue-500 bg-white block text-center py-2 px-4 rounded-md shadow-md transition-all duration-300 ease-in-out' : 
                            'text-blue-500 block text-center py-2 px-4 rounded-md hover:bg-gray-900 hover:text-blue-500 transition-all duration-300 ease-in-out'
                        } 
                        onClick={toggleMenu}
                    >
                        Skills
                    </NavLink>
                </div>
            )}
        </nav>
    </header>
  )

}

export default Navbar