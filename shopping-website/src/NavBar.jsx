import React, { useState, useMemo } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaStore } from 'react-icons/fa';
import i1 from './images/i1.webp';

const NavBar = () => {
  const [query, setQuery] = useState('');
  const [options, setOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false); 

  const allOptions = useMemo(() => ['Mobile 1', 'Mobile 2', 'Mobile 3', 'Laptop 1', 'Laptop 2', 'Laptop 3', 'Camera 1', 'Camera 2', 'Camera 3'], []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    setShowOptions(true); 
    
    const filteredOptions = allOptions.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setOptions(filteredOptions);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Logo />
          <div className="flex-grow mx-4 relative max-w-3xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:border-gray-400"
              placeholder="Search for products..."
              onBlur={() => setShowOptions(false)} 
            />
            {showOptions && (
              <OptionsList options={options} scrollToSection={scrollToSection} />
            )}
          </div>
          <UserActions />
        </div>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={i1} alt="Logo" className="h-8 w-8 mr-1" />
    </div>
  );
};

const UserActions = () => {
  return (
    <div className="flex items-center space-x-4">
      <button className="text-gray-700 hover:text-gray-900 flex items-center">
        <FaUser className="h-5 w-5 mr-1" />
        Login
      </button>
      <button className="text-gray-700 hover:text-gray-900 flex items-center">
        <FaShoppingCart className="h-5 w-5 mr-1" />
        Cart
      </button>
      <button className="text-gray-700 hover:text-gray-900 flex items-center">
        <FaStore className="h-5 w-5 mr-1" />
        Become a Seller
      </button>
    </div>
  );
};

const OptionsList = ({ options, scrollToSection }) => {
  return (
    <div className="absolute left-0 mt-1 w-full bg-white border rounded-md shadow-lg z-10">
      {options.map((option, index) => (
        <div key={index} className="py-1 px-3 hover:bg-gray-100 cursor-pointer">
          <span onClick={() => scrollToSection(option.replace(/\s/g, '').toLowerCase())}>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
