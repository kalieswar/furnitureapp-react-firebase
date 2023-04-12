import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsArrowRight,BsFillGeoAltFill,BsFillEnvelopeFill,BsFillTelephoneFill}  from "react-icons/bs";
import Button from 'react-bootstrap/esm/Button';
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaFacebookF,  FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { useSelector } from 'react-redux';
import React,{Fragment} from 'react';
function Footer() {
    const {isAuthenticated} = useSelector(state => state.loginState)
  return (
    <Fragment>
                {isAuthenticated ?
        <Fragment>
    <Container fluid className='bg-dark text-light mt-5 py-5'>

        <Container className='pt-5'>
        <Row className='g-5'>
        <Col lg="3" md="6">
            <h3 className='text-white mb-4'>Popular Links</h3>
            <div className='d-flex flex-column justify-content-start'>
                <a className='text-light mb-2 services-atag' href='/'>
                    <BsArrowRight/><span className='px-1'>Home</span>
                </a>
            </div>
            <div className='d-flex flex-column justify-content-start'>
                <a className='text-light mb-2 services-atag' href='/about'>
                    <BsArrowRight/><span className='px-1'>About Us</span>
                </a>
            </div>
            <div className='d-flex flex-column justify-content-start'>
                <a className='text-light mb-2 services-atag' href='/services'>
                    <BsArrowRight/><span className='px-1'>Our Design</span>
                </a>
            </div>
            <div className='d-flex flex-column justify-content-start'>
                <a className='text-light mb-2 services-atag' href='.'>
                    <BsArrowRight/><span className='px-1'>Shop</span>
                </a>
            </div>
            <div className='d-flex flex-column justify-content-start'>
                <a className='text-light mb-2 services-atag' href='.'>
                    <BsArrowRight/><span className='px-1'>Contact Us</span>
                </a>
            </div>
        </Col>
        <Col lg="3" md="6">
        <h3 className='text-white mb-4'>Quick Links</h3>
            <div className='d-flex flex-column justify-content-start'>
                <a className='text-light mb-2 services-atag' href='/'>
                    <BsArrowRight/><span className='px-1'>Home</span>
                </a>
            </div>
            <div className='d-flex flex-column justify-content-start'>
                <a className='text-light mb-2 services-atag' href='/about'>
                    <BsArrowRight/><span className='px-1'>About Us</span>
                </a>
            </div>
            <div className='d-flex flex-column justify-content-start'>
                <a className='text-light mb-2 services-atag' href='/services'>
                    <BsArrowRight/><span className='px-1'>Our Services</span>
                </a>
            </div>
            <div className='d-flex flex-column justify-content-start'>
                <a className='text-light mb-2 services-atag' href='.'>
                    <BsArrowRight/><span className='px-1'>Latest Blog</span>
                </a>
            </div>
            <div className='d-flex flex-column justify-content-start'>
                <a className='text-light mb-2 services-atag' href='.'>
                    <BsArrowRight/><span className='px-1'>Contact Us</span>
                </a>
            </div>
        </Col>
        <Col lg="3" md="6">
        <h3 className='text-white mb-4'>Get In Touch</h3>
        <p className='mb-2'><BsFillGeoAltFill/>123 Street, New York, USA</p>
        <p className='mb-2'><BsFillEnvelopeFill/>info@example.com</p>
        <p className='mb-2'><BsFillTelephoneFill/>+012 345 67890</p>
        </Col>
        <Col lg="3" md="6">
        <h3 className='text-white mb-4'>Follow Us</h3>
        <div className='d-flex'>
            <Button className='btn-lg btn-lg-square rounded me-2'>
                <TfiTwitterAlt/>
            </Button>
            <Button className='btn-lg btn-lg-square rounded me-2'>
                <FaFacebookF/>
            </Button>
            <Button className='btn-lg btn-lg-square rounded me-2'>
                <FaLinkedin/>
            </Button>
            <Button className='btn-lg btn-lg-square rounded me-2'>
                <AiOutlineInstagram/>
            </Button>
        </div>
        </Col>
        <Col lg="12"></Col>
      </Row>
        </Container>
       
    </Container>
    </Fragment> : null}
    </Fragment>
  );
}

export default Footer;