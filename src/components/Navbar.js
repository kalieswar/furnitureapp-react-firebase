import React, { useEffect, useState, Fragment } from 'react'
import { Container} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../slices/loginSlice';


function Navbars(){
    const [cartCount,setCartCount]= useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {isAuthenticated} = useSelector(state => state.loginState)

    useEffect(()=>{
      const items = JSON.parse(localStorage.getItem("cart-items")) || [];
      setCartCount(items);
    },[])
    
    const handleClick = ()=>{

      localStorage.removeItem('authToken')
      navigate('/')
      dispatch(logOut())
    }
  return (
    <Fragment>
      {isAuthenticated ?
      <Fragment>
    
<Navbar expand="lg">

      <Container>
        <Navbar.Brand href="#home" className='text-white'>Furniture Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto bgc">
            <NavLink to='/' className='text-white nvlinks nav-link'>Home</NavLink>
            {isAuthenticated ? (<Link to='/'className='text-white nvlinks nav-link' onClick={handleClick}>Logout</Link>
             ) :
            (<NavLink to='/' className='text-white nvlinks nav-link'>Login</NavLink>)}
            <NavLink to='/cart' className='text-white nvlinks nav-link'>Cart({cartCount.length})</NavLink>
            {isAuthenticated ? <NavLink to='/profile' className='text-white nvlinks nav-link'>Profile</NavLink>: null}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
          : null}
    </Fragment>

  )
}

export default Navbars