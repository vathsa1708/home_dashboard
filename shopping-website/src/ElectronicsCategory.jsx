import React from 'react';
import mb1 from './images/mb1.jpg';
import mb2 from './images/mb2.jpg';
import mb3 from './images/mb3.jpg';
import l1 from './images/l1.avif';
import l2 from './images/l2.webp';
import l3 from './images/l3.jpg';
import c1 from './images/c1.jpg';
import c2 from './images/c2.jpg';
import c3 from './images/c3.jpg';
import l4 from './images/l4.jpg';
// import l5 from './images/l5.jpg';
import c4 from './images/c4.jpg';
// import c5 from './images/c5.jpg';
import mb4 from './images/mb4.jpg';

const ElectronicsCategory = () => {
  // Define subcategory data for Electronics
  const mobilesData = [
    { name: "Mobile 1", image: mb1, price: "$500" },
    { name: "Mobile 2", image: mb2, price: "$600" },
    { name: "Mobile 3", image: mb3, price: "$700" },
    { name: "Mobile 4", image: mb4, price: "$800" },
  ];

  const laptopsData = [
    { name: "Laptop 1", image: l1, price: "$1000" },
    { name: "Laptop 2", image: l2, price: "$1100" },
    { name: "Laptop 3", image: l3, price: "$1200" },
    { name: "Laptop 4", image: l4, price: "$1300" },
  ];

  const camerasData = [
    { name: "Camera 1", image: c1, price: "$1500" },
    { name: "Camera 2", image: c2, price: "$1600" },
    { name: "Camera 3", image: c3, price: "$1700" },
    { name: "Camera 4", image: c4, price: "$1800" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">Electronics</h2>

      {/* Mobiles */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Mobiles</h3>
        <div className="flex flex-wrap gap-24">
          {mobilesData.map((mobile, index) => (
            <div key={index} className="w-full md:w-1/5 flex-shrink-0 mb-4 md:mb-0">
              <img
                src={mobile.image}
                alt={mobile.name}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <div className="text-lg font-semibold">{mobile.name}</div>
              <div className="text-sm text-gray-600">{mobile.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Laptops */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Laptops</h3>
        <div className="flex flex-wrap gap-24">
          {laptopsData.map((laptop, index) => (
            <div key={index} className="w-full md:w-1/5 flex-shrink-0 mb-4 md:mb-0">
              <img
                src={laptop.image}
                alt={laptop.name}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <div className="text-lg font-semibold">{laptop.name}</div>
              <div className="text-sm text-gray-600">{laptop.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cameras */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Cameras</h3>
        <div className="flex flex-wrap gap-24">
          {camerasData.map((camera, index) => (
            <div key={index} className="w-full md:w-1/5 flex-shrink-0 mb-4 md:mb-0">
              <img
                src={camera.image}
                alt={camera.name}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <div className="text-lg font-semibold">{camera.name}</div>
              <div className="text-sm text-gray-600">{camera.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsCategory;
