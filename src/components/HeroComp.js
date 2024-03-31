import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const HeroComp = () => {
  return (
    <div className='hero min-vh-100 w-100' id="home">
        <Container>
            <Row>
                <Col >
                <h1 className="text-white text-white-75 text-center fs-1 animate__animated animate__fadeInUp" >Costitency is a key</h1>
                    <p className="text-white-50 text-center animate__animated animate__fadeInUp animate__delay-1s" >Menumbuhkan kesehatan secara alami adalah bentuk kedisiplinan anda dalam menjalani kehidupan.</p>
                </Col>
            </Row>
        </Container>



    </div>
  )
}

export default HeroComp