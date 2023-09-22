import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import abimg from '../src/Images/aboutimg1.webp';
import './About.css'
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <Container className='abt'>
        <h2 className='tit'>
            About us 
        </h2>
        <Row>
            <Col md={12}>
          <Image src={abimg} id='img'/>
            </Col>
           
        </Row>
      </Container>
      <Container>
        <Row>
            <Col>
            
            <p className='para'>
            we are passionate about fitness and committed to helping you achieve your health and wellness goals. With a team of experienced trainers, state-of-the-art equipment, and a welcoming community, we strive to make every visit to our gym a positive and inspiring experience.
            Our journey began with a vision to create a space where people of all fitness levels could come together, push their limits, and transform their lives through exercise and healthy living.
            We believe that fitness is not just a physical journey but also a mental and emotional one. Through our fitness programs, expert guidance, and a supportive gym community, we aim to inspire you to become the best version of yourself.
            </p>
           
           <br />
           <br />
           
           <h3>
            Our Facilities
           </h3>
           <p className='para'>
           Our gym is equipped with the latest in fitness technology, offering a wide range of equipment for cardio, strength training, and functional workouts. We take pride in maintaining a clean and safe environment where you can focus on your fitness goals without distractions.

           </p>

           <br />
           <br />
           
           <h3>
           Meet Our Team
           </h3>
           <p className='para'>
           Our team of certified trainers and fitness experts is dedicated to helping you succeed. With diverse backgrounds and specialties, they are here to provide personalized guidance, motivate you, and ensure that you get the most out of your fitness journey.

           </p>
            

           <br />
           <br />
           
           <h3>
           Community and Events
           </h3>
           <p className='para'>
           we believe that fitness is more than just working out; it's about building connections and a sense of belonging. We host various community events, challenges, and workshops throughout the year to keep you engaged and motivated.

           </p>
            
            
            </Col>
        </Row>
      </Container>
<hr />
      <Footer/>
    </div>
  )
}

export default About