import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';

const Products = () => {
  const [text, setText] = useState('');

  const matter = (data) => {
    setText(data);
  };

  return (
    <div className="main">
      <div className="carousel-container">
        <Carousel
          showThumbs={true}
          autoPlay
          interval={2000}
          infiniteLoop
          showArrows={false}
          showStatus={false}
        >
          <div
           
            className="carousel mg"
          ><br/><br/>
            <p className="hovertext">Agriculture Post Harvesting</p>
           
            <img
            
              src="https://images.pexels.com/photos/13233162/pexels-photo-13233162.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 1"
            />
          
          </div>
          <div
           className="carousel mg">
            <br/><br/>
            <p className="hovertext">Consumer Service</p>
            <img 
              src="https://images.pexels.com/photos/7621144/pexels-photo-7621144.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 2"
            />
          </div>
          <div 
           
          className="carousel">
            <br/><br/>
            <p className="hovertext">AI ML TREAD DETECTION SYSTEM</p>
            <img
        
              src="https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=600"
              alt="Image 3"
            />
          </div>
        </Carousel>
       
      </div>
    </div>
  );
};

export default Products;
