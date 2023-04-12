import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Snackbar, Alert, Button } from '@mui/material';
import { useParams } from 'react-router';
import Loading from './plugins/Loading';
import { db } from '../firebase/config';
import { getDoc, doc } from 'firebase/firestore';

const ProductDetail = () => {
    const [product, setProduct] = useState();
    const [open, setOpen] = useState(false);
    const { id } = useParams();
    const STORAGE_KEY = "cart-items"


    const [items, setItems] = useState(() => {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    })

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }, [items])
    const addtoCart =(id,productName,price,img, quantity="1")=>{
        const existingitem = items.find(item => item.id === id)
        if(existingitem){
            existingitem.quantity += parseInt(quantity)
            setItems([...items])
        }else{
        setItems([...items, {id, productName,price,img,quantity: parseInt(quantity)}])
        }
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
      }
      useEffect(() => {
        if(open) {
            setTimeout(() => {
                setOpen(false)
            }, 2000)
        }
    })


    useEffect(()=>{
        const funcAsync = async() =>{
            const prodref = doc(db, "products", id)
            const snap = await getDoc(prodref);
            setProduct(snap?.data())
        }
        funcAsync()
    },[id])
    console.log(id);
    return (

        <div className='container'>
            {product ? (<Row>
                <Col lg="6" className='py-5'>
                    <img src={product.img} alt={product.productName} className="d-block w-100 imgss" height={400} width={400}></img>
                </Col>
                <Col lg="6" className='py-5'>
                    <h3 className='mt-3'>{product.productName}</h3>
                    <hr />
                    <h4 className='mt-4'>Product ID: #{id}</h4>
                    <hr />
                    <h2 className='my-5'>Price {product.price}</h2>
                    {/* <Button className='btn-add px-5' onClick={() => addtoCart(product.id, product.productName, product.price, product.img, product.quantity)}>Add to Cart</Button> */}
                    <Button variant="outlined" className='btn-add px-5' onClick={() => addtoCart(id, product.productName, product.price, product.img, product.quantity)}>
                  Add Cart
                </Button>
                <Snackbar open={open} autoHideDuration={1000} anchorOrigin={{
                  horizontal:'center',
                  vertical:'top'
                }}>
                  <Alert onClose={handleClose}severity="success" sx={{ width: '100%' }}>
                    Your Cart Item(s) addded successfully!
                  </Alert>
                </Snackbar>
                    <Button className='btn-add px-5 ms-3'>Buy now</Button>
                </Col>
            </Row>) : <Loading/>}
        </div>
    )
}

export default ProductDetail