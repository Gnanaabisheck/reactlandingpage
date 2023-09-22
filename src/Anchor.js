import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Anchor.css'
import { Route, Routes,Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Training from './Training';
import Review from './Review';
const Anchor = () => {
  return (
    <div>
        <Navbar expand="lg" className='text-white'>
      <Container className='anch' fluid>
        <Navbar.Brand href="#home" id='tit'>Fast <span>burners</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >

            <Link to= "/" id='lnk'>Home</Link>
            <Link to= "/About" id='lnk'>About</Link>
            <Link to= "/Training" id='lnk'>Trainings</Link>
            <Link to= "/Review" id='lnk'>Reviews</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/About" element={<About />}/>
       <Route path="/Training" element={<Training />}/>
       <Route path="/Review" element={<Review />}/>

    </Routes>
    </div>
  )
}

export default Anchor