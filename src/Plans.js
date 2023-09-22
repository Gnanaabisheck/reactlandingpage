import React from 'react'
import './Plans.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const Plans = () => {
  return (
    <div>

        <Container className='plans'>
            <h2 className='pl-head'>
                OUR <span>PLANS</span> FOR USERS ARE 
            </h2>
         <Row>
            <Col md={4}>
            <div className="card" id='gl'>
                <h2 className='car-tit'>
                    silver package
                </h2>
                <div className="car-amt">
                <i class="fa fa-inr" aria-hidden="true"></i> 5499 / mo
                </div>
                <div className="feau">
                    Feautres
                </div>
                <div className="bene">
                    <ul>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        monthly once steam bath
                        </li>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Guest Passes
                        </li>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Entry to gym anytime.
                        </li>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        A free app for workouts.
                        </li>
                       
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Offer in weight gainer
                        </li>
                        
                    </ul>
                    <button className='bne-btn'> Enroll Now </button>
                </div>
                

            </div>
            </Col>
            <Col md={4}>
            <div className="card" id='plt'>

            <h2 className='car-tit'>
                    platinum package
                </h2>
                <div className="car-amt">
                <i class="fa fa-inr" aria-hidden="true"></i> 15000/ mo
                </div>
                <div className="feau">
                    Feautres
                </div>
                <div className="bene">
                    <ul>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Access to All Facilities
                        </li>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Priority Access
                        </li>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Personalized Training
                        </li>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Exclusive Classes
                        </li>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Locker and Towel Service
                        </li>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Nutritional Guidance
                        </li>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Personalized Workouts
                        </li>
                       
                    </ul>
                    <button className='bne-btn'> Enroll Now </button>
                </div>
                


            </div>
            </Col>
            <Col md={4}>
            <div className="card" id='gl'>

            <h2 className='car-tit'>
                    gold package
                </h2>
                <div className="car-amt">
                <i class="fa fa-inr" aria-hidden="true"></i> 7000 / mo
                </div>
                <div className="feau">
                    Feautres
                </div>
                <div className="bene">
                    <ul>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Priority Enrollment
                        </li>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Community Events
                        </li>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Basic Health Assessments
                        </li>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Guest Passes
                        </li>
                        <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Flexible Hours
                        </li>
                        
                    </ul>
                    <button className='bne-btn'> Enroll Now </button>
                </div>
                


            </div>
            </Col>
         </Row>
        </Container>
    </div>
  )
}

export default Plans