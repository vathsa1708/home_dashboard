import React, { useState } from 'react';
import electronicsImg from './images/elec.webp';
import fashionImg from './images/fash.webp';
import homeImg from './images/home.webp';
import sportsImg from './images/sport.webp';



const categoriesData = [
  {
    name: "Electronics",
    image: electronicsImg,
    subcategories: ["Mobiles", "Laptops", "Cameras"]
  },
  {
    name: "Fashion",
    image: fashionImg,
    subcategories: ["Men", "Women", "Kids"]
  },
  {
    name: "Home",
    image: homeImg,
    subcategories: ["Furniture", "Decor", "Appliances"]
  },
  {
    name: "Sports",
    image: sportsImg,
    subcategories: ["Fitness", "Outdoor", "Gear"]
  }
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedCategory(selectedCategory === index ? null : index);
  };

  return (
    <div className="flex justify-between mt-2 space-x-4">
      {categoriesData.map((category, index) => (
        <div key={index} className="relative group flex-grow text-center">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-32 object-cover rounded-lg"
          />
          <div className="mt-2 text-lg font-semibold flex items-center justify-center space-x-2">
            <span>{category.name}</span>
            <button
              onClick={() => handleButtonClick(index)}
              className="text-gray-600 focus:outline-none"
            >
              ▲
            </button>
          </div>
          {selectedCategory === index && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg p-2 z-10">
              {category.subcategories.map((sub, subIndex) => (
                <a
                  key={subIndex}
                  href={`#${sub.toLowerCase()}`}
                  className="block p-2 hover:bg-gray-100 z-20"
                  onClick={(e) => e.stopPropagation()} // Ensure click event doesn't close the dropdown
                >
                  {sub}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;
