import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';


const SavedAdd = () => {
    const [show, setShow] = useState(false);
    const [sho, setSho] = useState(false)
    const [homeInfo, setHomeInfo] = useState({
        address: "",
        city: "",
        phone: "",
        postalCode: "",
        country: "",
        state: "",
    })
    const [ofcInfo, setofcInfo] = useState({
        address: "",
        city: "",
        phone: "",
        postalCode: "",
        country: "",
        state: "",
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClos = () => setSho(false);
    const handleSho = () => setSho(true);


    const homeHandler = (e) => {
        e.preventDefault();
        localStorage.setItem('home-info', JSON.stringify(homeInfo))
        setSho(false)
    }
    const ofcHandler = (e) => {
        e.preventDefault();
        localStorage.setItem('office-info', JSON.stringify(ofcInfo))
        setShow(false)
    }
    const homeChange = (e) => {
        const { name, value } = e.target;
        setHomeInfo(prevState => ({ ...prevState, [name]: value }))
    }
    const ofcChange = (e) => {
        const { name, value } = e.target;
        setofcInfo(prevState => ({ ...prevState, [name]: value }))
    }



    useEffect(() => {
        const home = JSON.parse(localStorage.getItem("home-info"))
        setHomeInfo(home)
    }, [])
    useEffect(() => {
        const office = JSON.parse(localStorage.getItem("office-info"))
        setofcInfo(office)
    }, [])
    return (
        <Container >
            <Row className='my-5'>
                <Col lg={6}>
                    <Card >
                        {homeInfo === null ? (
                            <Card.Body>
                                <Card.Title>Home Address</Card.Title>
                                <h4>Address: </h4>
                                <h4>City: </h4>
                                <h4>Country: </h4>
                                <h4>Phone: </h4>
                                <h4>pincode: </h4>
                                <h4>state: </h4>

                                <Button variant="primary" onClick={handleSho}>Edit Address</Button>
                                <Modal show={sho} onHide={handleClos} animation={false}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit Home address</Modal.Title>
                                    </Modal.Header>
                                    <form className='shadow-lg p-4' onSubmit={homeHandler}>
                                        <div className='form-group'>
                                            <label>Address</label>
                                            <input type='text' className='form-control' name='address' onChange={homeChange} />
                                        </div>
                                        <div className='form-group'>
                                            <label>City</label>
                                            <input type='text' className='form-control' name='city' onChange={homeChange} />
                                        </div>
                                        <div className='form-group'>
                                            <label>Phone No</label>
                                            <input
                                                type='phone'
                                                className='form-control'
                                                name='phone'
                                                onChange={homeChange}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label>Postal Code</label>
                                            <input
                                                type='number'
                                                className='form-control'
                                                name='postalCode'
                                                onChange={homeChange}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label>Country</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                name='country'
                                                onChange={homeChange}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label>State</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                name='state'
                                                onChange={homeChange}
                                            />
                                        </div>
                                        <div className='d-grid gap-2 mt-3'>
                                            <button className='btn btn-primary'
                                                type='submit'
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </form>
                                </Modal>
                            </Card.Body>
                        ) : (
                            <Card.Body>
                                <Card.Title>Home Address</Card.Title>
                                <h4>Address: {homeInfo.address}</h4>
                                <h4>City: {homeInfo.city}</h4>
                                <h4>Country: {homeInfo.country}</h4>
                                <h4>Phone: {homeInfo.phone}</h4>
                                <h4>pincode: {homeInfo.postalCode}</h4>
                                <h4>state: {homeInfo.state}</h4>

                                <Button variant="primary" onClick={handleSho}>Edit Address</Button>
                                <Modal show={sho} onHide={handleClos} animation={false}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit Home address</Modal.Title>
                                    </Modal.Header>
                                    <form className='shadow-lg p-4' onSubmit={homeHandler}>
                                        <div className='form-group'>
                                            <label>Address</label>
                                            <input type='text' className='form-control' name='address' value={homeInfo.address} onChange={homeChange} />
                                        </div>
                                        <div className='form-group'>
                                            <label>City</label>
                                            <input type='text' className='form-control' name='city' value={homeInfo.city} onChange={homeChange} />
                                        </div>
                                        <div className='form-group'>
                                            <label>Phone No</label>
                                            <input
                                                type='phone'
                                                className='form-control'
                                                name='phone'
                                                value={homeInfo.phone}
                                                onChange={homeChange}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label>Postal Code</label>
                                            <input
                                                type='number'
                                                className='form-control'
                                                name='postalCode'
                                                value={homeInfo.postalCode}
                                                onChange={homeChange}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label>Country</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                name='country'
                                                value={homeInfo.country}
                                                onChange={homeChange}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label>State</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                name='state'
                                                value={homeInfo.state}
                                                onChange={homeChange}
                                            />
                                        </div>
                                        <div className='d-grid gap-2 mt-3'>
                                            <button className='btn btn-primary'
                                                type='submit'
                                            >
                                                Edit
                                            </button>
                                        </div>

                                    </form>
                                </Modal>
                            </Card.Body>
                        )}

                    </Card>
                </Col>
                <Col lg={6}>
                    <Card >
                        {ofcInfo === null ?(
                                                    <Card.Body>
                                                    <Card.Title>Office Address</Card.Title>
                                                    <h4>Address: </h4>
                                                    <h4>City: </h4>
                                                    <h4>Country: </h4>
                                                    <h4>Phone: </h4>
                                                    <h4>pincode: </h4>
                                                    <h4>state: </h4>
                        
                                                    <Button variant="primary" onClick={handleShow}>Edit Address</Button>
                                                    <Modal show={show} onHide={handleClose} animation={false}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Edit Office address</Modal.Title>
                                                        </Modal.Header>
                                                        <form className='shadow-lg p-4' onSubmit={ofcHandler}>
                                                            <div className='form-group'>
                                                                <label>Address</label>
                                                                <input type='text' className='form-control' name='address'  onChange={ofcChange} />
                                                            </div>
                                                            <div className='form-group'>
                                                                <label>City</label>
                                                                <input type='text' className='form-control' name='city'  onChange={ofcChange} />
                                                            </div>
                                                            <div className='form-group'>
                                                                <label>Phone No</label>
                                                                <input
                                                                    type='phone'
                                                                    className='form-control'
                                                                    name='phone'
                                                                     onChange={ofcChange}
                                                                />
                                                            </div>
                                                            <div className='form-group'>
                                                                <label>Postal Code</label>
                                                                <input
                                                                    type='number'
                                                                    className='form-control'
                                                                    name='postalCode'
                                                                    onChange={ofcChange}
                                                                />
                                                            </div>
                                                            <div className='form-group'>
                                                                <label>Country</label>
                                                                <input
                                                                    type='text'
                                                                    className='form-control'
                                                                    name='country'
                                                                    onChange={ofcChange}
                                                                />
                                                            </div>
                                                            <div className='form-group'>
                                                                <label>State</label>
                                                                <input
                                                                    type='text'
                                                                    className='form-control'
                                                                    name='state'
                                                                    onChange={ofcChange}
                                                                />
                                                            </div>
                                                            <div className='d-grid gap-2 mt-3'>
                                                                <button className='btn btn-primary'
                                                                    type='submit'
                                                                >
                                                                    Edit
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </Modal>
                        
                                                </Card.Body>
                        ):(
                            <Card.Body>
                            <Card.Title>Office Address</Card.Title>
                            <h4>Address: {ofcInfo.address}</h4>
                            <h4>City: {ofcInfo.city}</h4>
                            <h4>Country: {ofcInfo.country}</h4>
                            <h4>Phone: {ofcInfo.phone}</h4>
                            <h4>pincode: {ofcInfo.postalCode}</h4>
                            <h4>state: {ofcInfo.state}</h4>

                            <Button variant="primary" onClick={handleShow}>Edit Address</Button>
                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit Office address</Modal.Title>
                                </Modal.Header>
                                <form className='shadow-lg p-4' onSubmit={ofcHandler}>
                                    <div className='form-group'>
                                        <label>Address</label>
                                        <input type='text' className='form-control' name='address' value={ofcInfo.address} onChange={ofcChange} />
                                    </div>
                                    <div className='form-group'>
                                        <label>City</label>
                                        <input type='text' className='form-control' name='city' value={ofcInfo.city} onChange={ofcChange} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Phone No</label>
                                        <input
                                            type='phone'
                                            className='form-control'
                                            name='phone'
                                            value={ofcInfo.phone} onChange={ofcChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Postal Code</label>
                                        <input
                                            type='number'
                                            className='form-control'
                                            name='postalCode'
                                            value={ofcInfo.postalCode} onChange={ofcChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>Country</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='country'
                                            value={ofcInfo.country} onChange={ofcChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>State</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='state'
                                            value={ofcInfo.state} onChange={ofcChange}
                                        />
                                    </div>
                                    <div className='d-grid gap-2 mt-3'>
                                        <button className='btn btn-primary'
                                            type='submit'
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </form>
                            </Modal>

                        </Card.Body>
                        )}

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SavedAdd;