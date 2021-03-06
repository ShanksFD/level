import React from 'react'
import {Image, Button, Row, Col, Container} from 'react-bootstrap'

// Local imports
import './Hero.css'

function Hero({title, image, buttonTitle, reverseOrder, bgColor, useH2, desc, handleClick}) {
   return (
      <div className="hero" style={{backgroundColor: bgColor}}>
         <Container className="hero-content">
            <Row className={reverseOrder ? "flex-row-reverse" : "flex-row"}>
               <Col className="my-auto mx-auto hero-title" lg={6}>
                  <Row className="hero-text">
                     {useH2 ? 
                        <h2>{title}</h2> 
                        : <h1>{title}</h1>}
                     {desc && <h5>{desc}</h5>}
                  </Row>
                  {/* Center button in mobile view */}
                  <Row className="d-sm-flex d-lg-block d-xl-block d-md-block justify-content-center mx-auto">
                     <Button onClick={handleClick} variant="dark">{buttonTitle}</Button>
                  </Row>
               </Col>

               <Col className="hero-img-wrapper" lg={6}>
                  <Image src={image} fluid/>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Hero