import React from 'react'
import Col from 'react-bootstrap/Col';
import './footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const Footer = () => {
  return (
    <div>
        <Container className='foot'>
       <Row>
        <Col md={4}>
       <h2>
        For Contact 
       </h2>
       <ul>
        <li>
        <i class="fa fa-phone" aria-hidden="true"></i> 12345678998
        </li>
        <li><i class="fa fa-globe" aria-hidden="true"></i>  www.fastburners.in</li>
        <li><i class="fa fa-envelope" aria-hidden="true"></i> FastBurners@gmail.com</li>
       </ul>
 
        </Col>
        <Col md={4}>
            <h2>
                Carrers
            </h2>
            <ul>
                <li>
                    Currently we are not hiring if we started hiring we will inform you..
                </li>
            </ul>
            

        </Col>
        <Col md={4}>
            <h2>
                newsletter
            </h2>
            <ul>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas earum voluptate ratione asperiores pariatur praesentium .
                </li>
            </ul>

        </Col>
       </Row>
        </Container>
    </div>
  )
}

export default Footer