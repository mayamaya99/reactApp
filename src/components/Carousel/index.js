import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

import carouselBackground from '../../assets/images/header-bg.jpg';

const Slider = () => {
    return (
        <>
          
            <Carousel>
                <Carousel.Item interval={1000}>
                <img
                    className='d-block w-100 datascience9-carousel-width'
                    src={carouselBackground}
                    alt='First slide'
                    />
                    <Carousel.Caption>
                        <h3>Automated Microservices Generation</h3>
                        <p>100% automated microservices generation from a database schema.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <img
                    className='d-block w-100  datascience9-carousel-width'
                    src={carouselBackground}
                    alt='Second slide'
                    />
                    <Carousel.Caption>
                        <h3>Custom Web Development</h3>
                        <p>Develop custom web applications using that meet customer requirements.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className='d-block w-100  datascience9-carousel-width'
                    src={carouselBackground}
                    alt='Second slide'
                    />
                    <Carousel.Caption>
                        <h3>Data Migration and Transformation</h3>
                        <p>
                        Transform data from one medium to another.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
           
        </>
    )
}

export default Slider;