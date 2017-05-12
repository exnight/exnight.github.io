import React from 'react';
import Slider from 'react-slick';
import { Image } from 'semantic-ui-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import cycling from '../../img/slides/cycling.JPG';
import nighthike from '../../img/slides/nighthike.JPG';
import railway from '../../img/slides/railway.JPG';
import waterfall from '../../img/slides/waterfall.JPG';

const Slideshow = () => {
  const settings = {
    dots: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
  };

  return (
    <div className="slidecontainer">
      <Slider {...settings}>
        <div><Image src={railway} alt="Railway" /></div>
        <div><Image src={cycling} alt="Cycling" /></div>
        <div><Image src={nighthike} alt="Night Hike" /></div>
        <div><Image src={waterfall} alt="Waterfall" /></div>
      </Slider>
    </div>
  );
};

export default Slideshow;
