import React, { useState, useEffect } from "react";
import { Page, Document} from "@react-pdf/renderer";
import ReactDOMServer from "react-dom/server"
import { Html } from "react-pdf-html";
import 'bootstrap/dist/css/bootstrap.min.css';



const InvoicePdf = () => {

    const [cartItems, setCartItems] = useState([]);
    const [add, setAdd] = useState({})


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart-items")) || [];
        setCartItems(items);
    }, []);
    useEffect(() => {
        const address = JSON.parse(localStorage.getItem("shipping-info"))
        setAdd(address);
    }, [])
    const shippingPrice = cartItems.reduce((acc, item) => (acc + item.quantity * item.price), 0) >= 800 ? 0 : 50
    const FinalPrice = cartItems.reduce((acc, item) => (acc + item.quantity * item.price), 0) + shippingPrice

    const element = (
        <html>
            <body>
                <style>
                    {`.confirmOrder-cartItem-container {
                        height: 100px;
                        width: 100%;
                        margin-top: 10px;
                        margin-left: 1%;
                    }

                    .confirmOrder-cartItem-img-container {
                        height: 350px;
                        width: 100px;
                        margin-top: 15px;
                        margin-left: 15px;
                        border-radius: 10px;
                    }

                    .confirmOrder-cartItem-img {
                        height: 150px;
                        width: 100%;
                    }

                    .confirmOrder-cartItem-details-container {
                        margin-left: 200px;
                        position: relative;
                        bottom: 50px
                    }
                    .confirmOrder-cartItem-name {
                        font-size: 18px;
                        font-weight: 680;
                    }

                    .confirmOrder-cartItem-price {
                        position: relative;
                        left: 100px;
                        bottom: 40px;
                        color: #525050;
                        font-size: 16px;
                        font-weight: 500;
                    }
                    table {
                        width: 100%;
                      }

                      td, th {
                        border: 1px solid #dddddd;
                        text-align: left;
                        padding: 8px;
                      }

                      tr:nth-child(even) {
                        background-color: #dddddd;
                      }`}
                </style>
<div className="container">
      <div>
        <div key={add}>
          <div style={{textAlign:"center"}}>Invoice</div>
          <hr/>

          <h4 className='mb-4' style={{ fontWeight:680, fontSize:"18px"}}>Shipping Info : </h4>
          <p><span style={{fontWeight:680}}>Address:</span>{add.address}, {add.city}, {add.postalCode}, {add.state},{add.country}</p>
          <p><span style={{fontWeight:680}}>Phone: {add.phone}</span></p>
          <hr />
        </div>
        <div className="col-12 col-lg-12">
          <h4 className='mt-4' style={{fontWeight:680, fontSize:"18px"}}>Your Ordered Items</h4>
          {cartItems.map(item => (
              <div key={item.id}>
                <div className='confirmOrder-cartItem-container'>
                  <div className="confirmOrder-cartItem-img-container">
                    <img className="confirmOrder-cartItem-img" src={item.img} alt={item.productName}></img>
                  </div>
                  <div className="confirmOrder-cartItem-details-container">
                    <h4 className="confirmOrder-cartItem-name">{item.productName}</h4>
                    <p className="confirmOrder-cartItem-price">{item.quantity} X ${item.price} = <b>${item.quantity * item.price}</b></p>
                  </div>
                </div>
              </div>
          ))}
          <hr />
        </div>
        <div className=' col-12 col-lg-12 my-4'>
          <table >
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
          </table>
        </div>
      </div>
    </div>
            </body>

        </html>
    );

    const html = ReactDOMServer.renderToStaticMarkup(element);

    return (
        <Document>
            <Page>
                <Html>{html}</Html>
            </Page>
        </Document>
    );
}

export default InvoicePdf;