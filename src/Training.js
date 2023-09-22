import React from 'react'
import './Training.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import timg1 from '../src/Images/timg1.jpeg'
import timg2 from '../src/Images/timg2.jpeg'
import timg3 from '../src/Images/timg3.jpeg'
import timg4 from '../src/Images/timg4.jpeg'
import timg5 from '../src/Images/timg5.jpeg'
import aboutimg1 from '../src/Images/aboutimg1.webp'
import aboutimg2 from '../src/Images/aboutimg2.webp'
import img1 from '../src/Images/img1.jpg'
import Footer from './Footer';



const Training = () => {
  return (
    <div>

        <Container>
        <h2 className='hd'>
        Our personalized training program is tailored to your specific fitness goals. Whether you want to lose weight, gain muscle, or improve overall fitness, our certified trainers will create a custom workout plan just for you.
                </h2>
            <Row>
                <Col md={6}>
               <div className="imag">
               <Image src={timg1} fluid/>
               </div>
               <h2>
                TREADMILL
               </h2>
                   
                </Col>
                <Col md={6}>
              <div className="imag">
              <Image src={timg2} fluid/>
              </div>
                   <h2>
                    ROPING
                   </h2>
                </Col> <Col md={6}>
              <div className="imag">
              <Image src={timg3} fluid/>
              </div>
                   <h2>
                    WEIGHT LIFTING
                   </h2>
                </Col> <Col md={6}>
                <div className="imag">
                <Image src={timg4} fluid/>
                </div>
                   <h2>
                    WEIGHT PUSHING
                   </h2>
                </Col> <Col md={6}>
               <div className="imag">
               <Image src={timg5} fluid/>
               </div>
                   <h2>
                    KICK BOXING
                   </h2>
                </Col> <Col md={6}>
                <div className="imag">
                <Image src={aboutimg1} fluid/>
                </div>
                   <h2>
                    WEIGHT TRAINING
                   </h2>
                </Col> <Col md={6}>
                <div className="imag">
                <Image src={aboutimg2} fluid/>
                </div>
                   <h2>
                        EXPERIENCED COACHES
                   </h2>
                </Col> <Col md={6}>
                <div className="imag">
                <Image src={img1} fluid/>
                </div>
                   <h2>
                        DIET PALNS
                   </h2>
                </Col>
            </Row>
        </Container>
        <hr />
        <Footer/>
    </div>
  )
}

export default Training