import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import img from '../src/Images/img1.jpg';
import img2 from '../src/Images/timg4.jpeg'
import Plans from './Plans';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
     <Container className='home-site' >
        <Row className="justify-content-between">
            <Col md={7}>
                <h2 className='home-title'>
                    Join <span>the legends</span> of the fitness world
                </h2>
                <p className='home-disc'>
                Most of the people in the gym had their headphones in and were inside of their own world, oblivious to what was going on in all of the surrounding areas. The majority of the conversations that were going on were most often strictly gym based questions. I heard a few questions that were not just gym based but for the most part I was hearing questions about the weight amounts people should use, or questions of people asking another person to put more weight onto their machines and such things. 

                </p>
                <button id='join-btn'> join now </button>
            </Col>
            <Col md={5}>
            <Image src={img} className='home-img' fluid/>
          
            </Col>
        </Row>
     </Container>

     <Container className='programs'>

      <h2 className='pr-tit'>
        WE PROVIDE <span>PROGRAMS</span> LIKE  
      </h2>
      <Row>
        <Col md={4}>
        <div className="box-pr">
        <i class="fa fa-bath" aria-hidden="true"></i>
        <p className='pr-title'>
              steam bath
        </p>
        <p className='pr-disc'>
Steam opens your pores and cleanses your skin. It can help loosen any dirt and debris buildup, which can help improve the appearance of your skin. Lowers blood pressure. The heat in a steam room can dilate, or enlarge, your blood vessels.
        </p>
        </div>

        </Col>
        <Col md={4}>
        <div className="box-pr">
        <i class="fa fa-thermometer-empty" aria-hidden="true"></i>
        <p className='pr-title'>
          ice bath
        </p>
        <p className='pr-disc'>
        In sports therapy, an ice bath, or sometimes cold-water immersion or cold therapy, is a training regimen usually following a period of intense exercise in which a substantial part of a human body is immersed in a bath of ice or ice-water for a limited duration.
        </p>
        </div>

        </Col>
        <Col md={4}>
        <div className="box-pr">
        <i class="fa fa-bath" aria-hidden="true"></i>
        <p className='pr-title'>
oil massage
        </p>
        <p className='pr-disc'>
        The body oil massage can help to deeply moisturize the skin, while its natural anti-inflammatory properties help to reduce any redness or irritation. Overall, body oil massages are a great way to relax the body and improve overall wellbeing.
        </p>
        </div>

        </Col>
        <Col md={4}>
        <div className="box-pr">
        <i class="fa fa-shower" aria-hidden="true"></i>
        <p className='pr-title'>
          cold shower
        </p>
        <p className='pr-disc'>
        Cold showers, which involve lowering the water temperature below 60 degrees for two to three minutes at a time. Cold spray, used to numb a small area. Cold water immersion or ice baths, or submerging eve
        </p>
        </div>

        </Col>
        <Col md={4}>
        <div className="box-pr">
        <i class="fa fa-male" aria-hidden="true"></i>
        <p className='pr-title'>
protien supliments
        </p>
        <p className='pr-disc'>
        if it is a good quality third-party tested product with minimal sugar and void of harmful additives. Protein powders can fit into most eating patterns and help you meet your health goals. Just remember—protein powder is a dietary supplement. 
        </p>
        </div>

        </Col>
        <Col md={4}>
        <div className="box-pr">
        <i class="fa fa-user-md" aria-hidden="true"></i>
        <p className='pr-title'>
        medical services
        </p>
        <p className='pr-disc'>
        Medical services means Medically Necessary services, including, as the context requires, Confinement, treatments, procedures, tests, examinations or other related services for the investigation or treatment of a Disability.
        </p>
        </div>

        </Col>
      </Row>
      
     </Container>

     <Container className='val-con'>
      <h2 className='value-pr'>
        we provide <span>our values</span> for the success
          </h2>
      <Row>
        <Col md={6}>
          <Image src={img2} className='pr-img' fluid/>
        
        </Col>
        <Col md={6}>
          <ul className='list'>
            <li className='lis'>
            To maintain your weight: Work your way up to 150 minutes a week of moderate physical activity, which could include dancing or yard work. You could achieve the goal of 150 minutes a week with 30 minutes a day, 5 days a week.
            </li>
            <li className='lis'>
            People vary greatly in how much physical activity they need for weight management. You may need to be more active than others to reach or maintain a healthy weight.
            </li>
            <li className='lis'>
            To lose weight and keep it off: You will need a high amount of physical activity unless you also adjust your eating patterns and reduce the amount of calories you’re eating and drinking. 
            </li>
          </ul>
        
        </Col>
      </Row>
     </Container>

     <Plans/>
     <hr />
     <Footer/>

    </div>
  )
}

export default Home