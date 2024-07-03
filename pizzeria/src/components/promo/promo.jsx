import React from 'react';
import { Carousel } from 'react-bootstrap';

const Promo = () => {
  return (
    <div className="container mt-4">
      <h1 style={{ textAlign: 'center', marginBottom:'50px'}}>Promociones</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pizzamaestra.com/v2/wp-content/uploads/layerslider/projects/Homepage-Slider-copy/Mesa-de-trabajo-3-100.jpg"
            alt="Promoción 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pizzamaestra.com/v2/wp-content/uploads/layerslider/projects/Homepage-Slider-copy/Mesa-de-trabajo-4-100.jpg"
            alt="Promoción 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pizzamaestra.com/v2/wp-content/uploads/layerslider/projects/Homepage-Slider-copy/Mesa-de-trabajo-6-100.jpg"
            alt="Promoción 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pizzamaestra.com/v2/wp-content/uploads/layerslider/projects/Homepage-Slider-copy/2.-Martes-Promo.jpg"
            alt="Promoción 4"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Promo;
