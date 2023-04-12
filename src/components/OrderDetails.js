import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col, Container, Table } from 'react-bootstrap';
import DownloadInvoice from './DownloadInvoice';
import { useSelector } from 'react-redux';


function OrderDetails() {
  const [add, setAdd] = useState({})
  const [cartItems, setCartitems] = useState([])
  const { user } = useSelector(state => state.loginState)



  useEffect(() => {
    const address = JSON.parse(localStorage.getItem("shipping-info"))
    setAdd(address);
  }, [])
  useEffect(() => { 
    const items = JSON.parse(localStorage.getItem("cart-items") || [])
    setCartitems(items)
  }, [])

  const shippingPrice = cartItems.reduce((acc, item) => (acc + item.quantity * item.price), 0) >= 800 ? 0 : 50
  const FinalPrice = cartItems.reduce((acc, item) => (acc + item.quantity * item.price), 0) + shippingPrice
  return (
    <Container>
      <Row className='d-flex justify-content-between'>
        <Col xs={12} lg={12} className='mt-5' key={add}>
          <h4 className='mb-4'>Shipping Info</h4>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Address: </b>{add.address}, {add.city}, {add.postalCode}, {add.state},{add.country}</p>
          <p><b>Phone: </b>{add.phone}</p>
          <hr />
        </Col>
        <Col xs="12" lg="12">
          <h4 className='mt-4'>Your Cart Items</h4>
          {cartItems.map(item => (
              <Fragment key={item.id}>
                <Row className='py-3'>
                  <Col xs={4} lg={4}>
                    <img src={item.img} alt={item.productName} height={90} width={115}></img>
                  </Col>
                  <Col xs="4" lg="4">
                    <h4>{item.productName}</h4>
                  </Col>
                  <Col xs="4" lg="4">
                    <p>{item.quantity} X ${item.price} = <b>${item.quantity * item.price}</b></p>
                  </Col>
                </Row>
              </Fragment>
          ))}
          <hr />
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
            {cartItems.map(item => (
              <tbody key={item.id}>
                <tr>
                  <td>{item.productName}</td>
                  <td>{item.quantity} items(s)</td>
                  <td>{item.price}</td>
                  <td>$ {item.quantity * item.price}</td>
                </tr>
              </tbody>))}
            <tbody>
              <tr>
                <td colSpan={3} className='text-center'>
                  Shipping Charges
                </td>
                <td>$ {shippingPrice}</td>
              </tr>
            </tbody>
            <tbody >
              <tr>
                <td colSpan={3} className='text-center'>
                  Final Price
                </td>
                <td>$ {FinalPrice}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={4} className='text-center'>
                  <DownloadInvoice />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default OrderDetails