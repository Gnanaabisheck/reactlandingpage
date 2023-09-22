import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import pimg1 from '../src/Images/pimg1.jpeg';
import pimg2 from '../src/Images/pimg2.jfif';
import pimg3 from '../src/Images/pimg3.jfif';
import pimg4 from '../src/Images/pimg4.jfif';
import pimg5 from '../src/Images/pimg5.jfif';
import pimg6 from '../src/Images/pimg6.jfif';
import pimg7 from '../src/Images/pimg7.jfif';
import pimg8 from '../src/Images/pimg8.jfif';

import './Review.css';
import Footer from './Footer';
const Review = () => {
  return (
    <div>
        <Container className='rev'>
       <Row>
        <Col md={4}>
        <div className="outer">
            <div className="inner">
                <div className="ig">
                    <Image src={pimg1} id='rimg'/>
                </div>
                <div className="nme">
                    <p>
                    John D
                    </p>
                </div>
                <div className="star">
                <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <div className="par">
                    <p>
                    "I've been a member at this gym for a year now, and I can't say enough good things about it. The trainers are top-notch, and the equipment is always in great condition. I've seen significant progress in my fitness journey, and it's all thanks to this gym!"
                    </p>
                </div>
            </div>
        </div>
        </Col>

        <Col md={4}>
        <div className="outer">
            <div className="inner">
                <div className="ig">
                    <Image src={pimg2} id='rimg'/>
                </div>
                <div className="nme">
                    <p>
                    Sarah M
                    </p>
                </div>
                <div className="star">
                <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i>
                </div>
                <div className="par">
                    <p>
                    "I love the variety of group fitness classes available here. The instructors are motivating, and I always leave feeling energized. The only reason I'm not giving it 5 stars is because I wish there were more evening class options."
                    </p>
                </div>
            </div>
        </div>
        </Col>

        <Col md={4}>
        <div className="outer">
            <div className="inner">
                <div className="ig">
                    <Image src={pimg3} id='rimg'/>
                </div>
                <div className="nme">
                    <p>
                    Michael P
                    </p>
                </div>
                <div className="star">
                <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="par">
                    <p>
                    "The personal training program at this gym is worth every penny. My trainer, Lisa, has been fantastic in helping me reach my weight loss goals. She's knowledgeable, patient, and keeps me accountable. Highly recommend!"
                    </p>
                </div>
            </div>
        </div>
        </Col>

        <Col md={4}>
        <div className="outer">
            <div className="inner">
                <div className="ig">
                    <Image src={pimg4} id='rimg'/>
                </div>
                <div className="nme">
                    <p>
                    Alex H
                    </p>
                </div>
                <div className="star">
                <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="par">
                    <p>
                    "I attended the yoga retreat organized by this gym, and it was a life-changing experience. The location was breathtaking, the instructors were exceptional, and the food was delicious. I can't wait for the next one!"
                    </p>
                </div>
            </div>
        </div>
        </Col>

        <Col md={4}>
        <div className="outer">
            <div className="inner">
                <div className="ig">
                    <Image src={pimg5} id='rimg'/>
                </div>
                <div className="nme">
                    <p>
                    David S
                    </p>
                </div>
                <div className="star">
                <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <div className="par">
                    <p>
                    "I've been a member at this gym for a year now, and I can't say enough good things about it. The trainers are top-notch, and the equipment is always in great condition. I've seen significant progress in my fitness journey, and it's all thanks to this gym!"
                    </p>
                </div>
            </div>
        </div>
        </Col>

        <Col md={4}>
        <div className="outer">
            <div className="inner">
                <div className="ig">
                    <Image src={pimg6} id='rimg'/>
                </div>
                <div className="nme">
                    <p>
                    Mark B
                    </p>
                </div>
                <div className="star">
                <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="par">
                    <p>
                    "I've attended various workshops at this gym, and they're always informative and fun. The functional training workshop, in particular, improved my workout routine. Kudos to the trainers!"
                    </p>
                </div>
            </div>
        </div>
        </Col>

        <Col md={4}>
        <div className="outer">
            <div className="inner">
                <div className="ig">
                    <Image src={pimg7} id='rimg'/>
                </div>
                <div className="nme">
                    <p>
                    Rachel W
                    </p>
                </div>
                <div className="star">
                <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="par">
                    <p>
                    "Overall, I've had a positive experience at this gym. The atmosphere is welcoming, and the classes keep me motivated. It's helped me stay on track with my fitness goals."
                    </p>
                </div>
            </div>
        </div>
        </Col>


        <Col md={4}>
        <div className="outer">
            <div className="inner">
                <div className="ig">
                    <Image src={pimg8} id='rimg'/>
                </div>
                <div className="nme">
                    <p>
                    Jackson M
                    </p>
                </div>
                <div className="star">
                <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <div className="par">
                    <p>
                    "I've been a member at this gym for a year now, and I can't say enough good things about it. The trainers are top-notch, and the equipment is always in great condition. I've seen significant progress in my fitness journey, and it's all thanks to this gym!"
                    </p>
                </div>
            </div>
        </div>
        </Col>


        <Col md={4}>
        <div className="outer">
            <div className="inner">
                <div className="ig">
                    <Image src={pimg1} id='rimg'/>
                </div>
                <div className="nme">
                    <p>
                    John D
                    </p>
                </div>
                <div className="star">
                <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="par">
                    <p>
                    "I've been a member at this gym for a year now, and I can't say enough good things about it. The trainers are top-notch, and the equipment is always in great condition. I've seen significant progress in my fitness journey, and it's all thanks to this gym!"
                    </p>
                </div>
            </div>
        </div>
        </Col>

       </Row>
        </Container>

        <hr />
        <Footer/>
    </div>
  )
}

export default Review