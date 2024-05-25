import React from 'react';
import NavBar from './NavBar';
import Categories from './Categories';
import ImageSlider from './ImageSlider';
import image1 from './images/m1.webp';
import image2 from './images/m2.webp';
import ElectronicsCategory from './ElectronicsCategory';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-4"> {/* Adjusted padding */}
        <Categories />
      </div>
      <div className="mt-0">
        <ImageSlider images={[image1, image2]} />
      </div>
      <ElectronicsCategory/>
    </div>
  );
};

export default HomePage;
