import React from 'react';
import { Carousel } from 'react-bootstrap';
function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="Slider-image1.jpg" alt="1st Slide" width= "1520" height="600" />
        <div class="carousel-caption d-none d-md-block">
        <h4>SAFAR</h4>
        <h4>Your journey is our journey too.</h4>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <img src="Slider-image2.jpg" alt="2nd Slide" width= "1520" height="600"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>BOOK YOUR TICKET WITH US</h5>
        <p>Bus tickets are now available on your fingertips.</p>
        <p>You are just a click away from the booking your seat.</p>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <img src="seat.jpg" alt="3rd Slide" width="1520" height="600"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Your Travel Partner</h5>
        <p>Your journey our responsibility.</p> 
        <p>Plan your journey with us. letus think for you.</p>
      </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
