import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { Snackbar, Alert } from '@mui/material';

const Address = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        phone: "",
        postalCode: "",
        country: "",
        state: "",
    })
    const infoKey = "shipping-info" 
    const submitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem(infoKey, JSON.stringify(shippingInfo));
        if (
          !shippingInfo.address ||
          !shippingInfo.city ||
          !shippingInfo.state ||
          !shippingInfo.country ||
          !shippingInfo.postalCode ||
          !shippingInfo.phone
        ) {
          setOpen(true);
        } else {
          navigate('/orderdetails');
        }
      };
      

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo(prevState => ({ ...prevState, [name]: value }))
    }
    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                setOpen(false)
            }, 3000)
        }
    })

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={10} lg={5} className='paddingg'>
                    <form onSubmit={submitHandler} className='shadow-lg p-4'>
                        <h1>Shipping Info</h1>
                        <div className='form-group'>
                            <label>Address</label>
                            <input type='text' className='form-control' name='address' value={shippingInfo.address} onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label>City</label>
                            <input type='text' className='form-control' name='city' value={shippingInfo.city} onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label>Phone No</label>
                            <input
                                type='phone'
                                className='form-control'
                                name='phone'
                                value={shippingInfo.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Postal Code</label>
                            <input
                                type='number'
                                className='form-control'
                                name='postalCode'
                                value={shippingInfo.postalCode}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Country</label>
                            <input
                                type='text'
                                className='form-control'
                                name='country'
                                value={shippingInfo.country}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>State</label>
                            <input
                                type='text'
                                className='form-control'
                                name='state'
                                value={shippingInfo.state}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='d-grid gap-2 mt-3'>
                            <button className='btn btn-primary'
                                type='submit'
                            >
                                Continue
                            </button>
                            <div className='d-grid gap-2'>
                                <button className='btn btn-primary mb-3'
                                    type='button'
                                    onClick={() => {
                                        const homeInfo = JSON.parse(localStorage.getItem('home-info')) || {};
                                        setShippingInfo({
                                            address: homeInfo.address || '',
                                            city: homeInfo.city || '',
                                            phone: homeInfo.phone || '',
                                            postalCode: homeInfo.postalCode || '',
                                            country: homeInfo.country || '',
                                            state: homeInfo.state || '',
                                        });
                                    }}
                                >
                                    Home address
                                </button>
                                <button className='btn btn-primary mb-3'
                                    type='button'
                                    onClick={() => {
                                        const officeInfo = JSON.parse(localStorage.getItem('office-info')) || {};
                                        setShippingInfo({
                                            address: officeInfo.address || '',
                                            city: officeInfo.city || '',
                                            phone: officeInfo.phone || '',
                                            postalCode: officeInfo.postalCode || '',
                                            country: officeInfo.country || '',
                                            state: officeInfo.state || '',
                                        });
                                    }}
                                >
                                    Office address
                                </button>
                            </div>

                        </div>
                        <Snackbar open={open} autoHideDuration={1000} anchorOrigin={{
                            horizontal: 'center',
                            vertical: 'top'
                        }}>
                            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                Please fill all your details
                            </Alert>
                        </Snackbar>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Address;