import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const ServicesComp = () => {
  return (
    <div className='services min-vh-100 d-flex align-items-center' id="service">
      <Container >
        <Row className='mb-5'>
            <Col className='py-1 px-1'>
            <h1 className='text-center fw-bold' data-aos="fade-up">What's About Healty</h1>
            <p className='text-center' data-aos="fade-up" data-aos-delay="200"> Labore minim laborum.</p>
            </Col>
        </Row>
        <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center'>
            <Col className='text-center py-5 px-5' data-aos="fade-up" data-aos-delay="400">
            <i className="fa-solid fa-dumbbell fs-2 mb-4"></i>
            <h5 className='fw-bold'>Be Consistent</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
            <Col className='text-center py-5 px-5' data-aos="fade-up" data-aos-delay="600">
            <i className="fa-solid fa-person-walking fs-2 mb-4"></i>
            <h5 className='fw-bold'>Stamina</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
            <Col className='text-center py-5 px-5' data-aos="fade-up" data-aos-delay="800">
            <i className="fa-solid fa-notes-medical fs-2 mb-4"></i>
            <h5 className='fw-bold'>Healty Life</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ServicesComp
