import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Snackbar, Alert, Button } from '@mui/material';
import Loading from './plugins/Loading';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

function Product() {
  const [open, setOpen] = useState(false)
  const STORAGE_KEY = "cart-items";
  const [product, setProduct] = useState([])



  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  })



  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addtoCart = (id, productName, price, img, quantity = "1") => {
    const existingitem = items.find(item => item.id === id)
    if (existingitem) {
      existingitem.quantity += parseInt(quantity)
      setItems([...items])
    } else {
      setItems([...items, { id, productName, price, img, quantity: parseInt(quantity) }])
    }
    setOpen(true)

  }

  useEffect(() => {
    const ref = collection(db, "products")
    getDocs(ref)
      .then((snapshot) => {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setProduct(results)
      })
  }, [])





  const handleClose = () => {
    setOpen(false)
  }
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false)
      }, 4000)
    }
  })

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <Fragment>
      {product ? <Container fluid className='py-4 gx-2'>
        <h1 className='text-center'>Our Shop Products</h1>
        <Row className='mx-5 pt-3'>

          {product && product.map((product) => (
            <Col lg="4" sm="12" md="6" key={product.id}>
              <Card style={{ width: '15rem' }}  >
                <Card.Img variant="top" src={product.img} onClick={() => handleClick(product.id)} className='p-5 imgs' />
                <Card.Body>
                  <Card.Title className='text-center'>{product.productName}</Card.Title>
                  <Card.Text className='text-center'>
                    Price ${product.price}
                  </Card.Text>
                  <Button variant="primary" className='padbtn'>Buy Now</Button>
                  {/* <Button variant="primary" className='padbtn mt-2' onClick={()=>addtoCart(product.id, product.productName,product.price, product.img, product.quantity)}>Add cart </Button> */}
                  <Button variant="outlined" className='padbtn mt-2' onClick={() => addtoCart(product.id, product.productName, product.price, product.img, product.quantity)}>
                    Add Cart
                  </Button>
                  <Snackbar open={open} autoHideDuration={1000} anchorOrigin={{
                    horizontal: 'center',
                    vertical: 'top'
                  }}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                      Your Cart Item(s) addded successfully!
                    </Alert>
                  </Snackbar>
                </Card.Body>
              </Card>
            </Col>
          ))}

        </Row>

      </Container>
        : <Loading />}
    </Fragment>

  );
}

export default Product;