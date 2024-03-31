import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Gallery1 from "../assets/img/gallery/gallery-1.jpg";
import Gallery2 from "../assets/img/gallery/gallery-2.jpg";
import Gallery3 from "../assets/img/gallery/gallery-3.jpg";
import Gallery4 from "../assets/img/gallery/gallery-4.jpg";
import Gallery5 from "../assets/img/gallery/gallery-5.jpg";
import Gallery6 from "../assets/img/gallery/gallery-6.jpg";


const GalleryComp= () => {
  return (
    <div className='gallery min-vn-100 d-flex align-items-center' id="gallery" >
      <Container>
        <Row className='row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3' > 
          <Col className='img' data-aos='fade-up'>
            <img src={Gallery1} alt='unsplash.com' className='w-100'  />
            <p> <b>20 Jan 2024,</b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptatem ea reprehenderit totam quibusdam mollitia soluta, quam eaque dignissimos harum neque pariatur rerum,eligendi recusandae voluptas. <a href="www.google.com"> Baca selengkapnya...</a></p>
            
          </Col>
          <Col data-aos='fade-up' data-aos-delay='200'>
            <img src={Gallery2} alt='unsplash.com' className='w-100'  />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sed ab porro corrupti quidem reiciendis alias ea doloremque beatae dolor doloribus esse, eveniet culpa sit minus. Alias sunt recusandae excepturi! <a href="www.google.com"> Baca selengkapnya...</a></p>

          </Col>
          <Col data-aos='fade-up' data-aos-delay='400'>
            <img src={Gallery3} alt='unsplash.com' className='w-100'  />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, tempora nihil iste, veritatis excepturi et doloremque quos, consequuntur at ipsam dolorum officia nemo quam dignissimos cupiditate eos ipsa commodi cum! <a href="www.google.com"> Baca selengkapnya...</a></p>
 
            </Col>
          <Col data-aos='fade-up' data-aos-delay='600'>
            <img src={Gallery4} alt='unsplash.com' className='w-100'  />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus minus dolores facere sequi placeat quia impedit magni tenetur. Ex maiores dolores ad dolor. Blanditiis sunt, reiciendis magnam unde facilis recusandae. <a href="www.google.com"> Baca selengkapnya...</a></p>

          </Col>
          <Col data-aos='fade-up' data-aos-delay='800'>
            <img src={Gallery5} alt='unsplash.com' className='w-100'  />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt distinctio necessitatibus impedit dolore magnam rerum hic, quos quidem inventore dignissimos explicabo voluptate dolor deserunt omnis, odio itaque ea ex? <a href="www.google.com"> Baca selengkapnya...</a></p>
   
            </Col>
          <Col data-aos='fade-up' data-aos-delay='1000'>
            <img src={Gallery6} alt='unsplash.com' className='w-100'  />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis adipisci nostrum ab sit qui quam sunt totam architecto beatae, soluta ex commodi, magni odio corporis velit praesentium expedita non doloremque? <a href="www.google.com"> Baca selengkapnya...</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GalleryComp;