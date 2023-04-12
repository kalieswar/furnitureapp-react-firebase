import React, { useState, useEffect, Fragment } from 'react'
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router';
import Table from 'react-bootstrap/Table';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart-items")) || [];
        setCartItems(items);
    }, []);

    const removeItemHandler = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        localStorage.setItem("cart-items", JSON.stringify(updatedItems));
    }

    const increaseItemQuantity = (id) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id) {
                const quantity = parseInt(item.quantity) || 0
                item.quantity = quantity + 1
            }
            return item
        })
        setCartItems(updatedItems);
        localStorage.setItem("cart-items", JSON.stringify(updatedItems));
    }

    const decreaseItemQuantity = (id) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id) {
                const quantity = parseInt(item.quantity)
                item.quantity = quantity - 1
            }
            return item
        }).filter(item => item.quantity > 0);
        setCartItems(updatedItems);
        localStorage.setItem("cart-items", JSON.stringify(updatedItems));
    }
    const checkOutHandler =()=>{
        navigate("/shipping")
    }
    return (
        <div>
            <Container>
                <Fragment>
                    {cartItems.length === 0 ? <h2 className='py-5 my-5'>Your Cart is empty</h2>
                     :
                    <Fragment>
                        <h2 className='mt-5'>You cart : {cartItems.length} items</h2>

                    <Row >
                        <Col xs="12" lg="12">
                            <hr />
                            {cartItems && cartItems.map((item) => (
                                <Row className='py-3' key={item.id}>
                                    <Col xs="3" lg="3">
                                        <img src={item.img} alt={item.productName} height="90" width={115}></img>
                                    </Col>
                                    <Col xs="3" lg="2">
                                        <h4>{item.productName}</h4>
                                    </Col>
                                    <Col xs="3" lg="3">
                                        <h4>Price: $ {item.price}</h4>
                                    </Col>
                                    <Col xs="2" lg="3" className='stockCounter'>
                                        <span className='btn btn-danger' onClick={() => decreaseItemQuantity(item.id)}>-</span>
                                        <input type='number' className='form-control count d-inline' value={item.quantity} readOnly />
                                        <span className='btn btn-primary' onClick={() => increaseItemQuantity(item.id)}>+</span>
                                    </Col>
                                    <Col xs="1" lg="1">
                                        <MdDelete style={{ color: "red", fontSize: '30px' }} onClick={() => removeItemHandler(item.id)}></MdDelete>
                                    </Col>
                                </Row>))}
                        </Col>
                        <Col xs={12} lg={12} className='my-4'>
                            <Table striped bordered hover size="lg">
                                <thead>
                                    <tr>
                                        <th colSpan={4} className='text-center'>Order Summary</th>
                                    </tr>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Actual Price</th>
                                        <th>Total Price</th>
                                    </tr>
                                </thead>
                                {cartItems && cartItems.map((item)=>(
                                <tbody key={item.id}>
                                    <tr>
                                        <td>{item.productName}</td>
                                        <td>{item.quantity} item(s)</td>
                                        <td>$ {item.price}</td>
                                        <td>$ {item.quantity * item.price}</td>
                                    </tr>
                                </tbody>))}
                                <tbody>
                                    <tr>
                                        <td colSpan={3} className='text-center'>Grant Total Price</td>
                                    <td>$ {cartItems.reduce((acc, item)=>(acc+item.quantity * item.price),0)}</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td colSpan={4} className='text-center'>
                                        <button className='btn btn-primary'style={{width:"100%"}} onClick={checkOutHandler}>Check Out</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    </Fragment>}
                </Fragment>
            </Container>
        </div>
    )
}

export default Cart;