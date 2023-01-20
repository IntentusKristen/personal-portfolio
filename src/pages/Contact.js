import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_14xbwcj', 'template_pkjd44s', form.current, 'ateXVpgMvpy00NNsT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='App'>
    <section className="contact" id="connect">
        <Container className="page-pad">
            <Row className="align-items-center">
                <Col md={6} className="d-flex justify-content-center">
                    <img className="contact-img" src={contactImg} alt="Contact Us"/>
                </Col>
                <Col md={6}>
                    <div className="d-flex justify-content-center">
                        <h2>Send Me a Message!</h2>
                    </div>
                    
                    <form ref={form} onSubmit={sendEmail}>
                        <Row>
                            <Col sm={6} className="px-1 d-flex justify-content-end">
                                <input className="input-field" type="text" placeholder="First Name" name="first_name"/>
                            </Col>
                            <Col sm={6} className="px-1 d-flex justify-content-start">
                                <input className="input-field" type="text" placeholder="Last Name" name="last_name"/>
                            </Col>
                            <Col sm={6} className="px-1 d-flex justify-content-end">
                                <input className="input-field" type="email" placeholder="Email" name="user_email"/>
                            </Col>
                            <Col sm={6} className="px-1 d-flex justify-content-start">
                                <input className="input-field" type="tel" placeholder="Phone" name="user_phone"/>
                            </Col>
                            <Col sm={12} className="d-flex justify-content-center">
                                <textarea className="message-box" row="6" placeholder="Message" name="message"/>
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <button className="contact-button" type="submit"><span>Send</span></button>
                            </Col>
                        </Row>
                    </form>

                </Col>
            </Row>
        </Container>
    </section>
    </div>
  );
};

export default Contact