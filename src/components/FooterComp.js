import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const FooterComp = () => {
  return (
    <div className="footer pb-3 pt4">
      <Container>
        <Row>
            <Col >
             <h4 className='fw-bold pt-4 text-white'>healthy</h4>
            </Col>
            <Col className='text-end pt-4 justify-content-center'>
         
            <i className="fa-brands fa-facebook text-white fs-3 mx-lg-2 mx-1"></i>
            <i className="fa-brands fa-twitter text-white fs-3 mx-lg-2 mx-2"></i>
            <i className="fa-brands fa-linkedin text-white fs-3 mx-lg-2 mx-2"></i>
            <i className="fa-brands fa-instagram text-white fs-3 mx-lg-22 mx-2"></i>
            </Col>
        </Row>
        <Row>
            <Col>
            <p className='text-center text-white-50' >&copy; Copyright by SpecialHealthy 2024, All Right Reserved.</p>
            </Col>
        </Row>
        
      </Container>
    </div>
  )
}


export default FooterComp
