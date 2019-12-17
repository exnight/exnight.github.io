import React from 'react';
import Slider from 'react-slick';
import { Image } from 'semantic-ui-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import cycling from '../../img/slides/cycling.jpg';
import nighthike from '../../img/slides/nighthike.jpg';
import railway from '../../img/slides/railway.jpg';
import waterfall from '../../img/slides/waterfall.jpg';

const Slideshow = () => (
  <div className="slidecontainer">
    <Slider
      dots="true"
      speed={1500}
      autoplay="true"
      autoplaySpeed={5000}
      fade="true"
    >
      <div><Image src={railway} alt="Railway" /></div>
      <div><Image src={cycling} alt="Cycling" /></div>
      <div><Image src={nighthike} alt="Night Hike" /></div>
      <div><Image src={waterfall} alt="Waterfall" /></div>
    </Slider>
  </div>
);

export default Slideshow;
