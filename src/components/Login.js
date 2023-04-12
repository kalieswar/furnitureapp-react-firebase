import React, { useEffect } from 'react';
import "../../src/components/Login.css";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions/LoginAction';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Snackbar, Alert} from '@mui/material';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState()
  const [error, setError] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { emailErrorMsg, passwordErrorMsg, error: errorData, isAuthenticated } = useSelector(state => state.loginState);

  const handleClose = () => {
    setError(false)
  }

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login({email, password} ))
    setData({email,password})
  }
  console.log(data);
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('authToken', JSON.stringify(data));
      navigate('/Home')
      setError(false)
    }
    if(errorData){
      setErrorMsg(errorData)
      setError(true)
    }

  }, [ isAuthenticated,data, navigate])

  useEffect(() => {
    setTimeout(() => {
      setError(false)
    }, 5000)
  },[])


  return (

    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6 text-center mb-5'>
          <h2 className='pt-5'>Login Page</h2>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-md-6 col-lg-4'>
          <div className='login py-5'>
            <h3 className='text-center mb-0 text-white'>Welcome</h3>
            <p className='text-center text-white'>Sign in to go to next page</p>
            <form className='login-form' onSubmit={loginHandler}>
              <div className='form-group'>
                <input type="email" className='form-control' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div>{emailErrorMsg}</div>
              <div className='form-group'>
                <input type="password" className='form-control mt-3' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <div>{passwordErrorMsg}</div>
              <div className='form-group d-md-flex'>
                <div className='w-100 text-md-right forgot mt-3'>
                  <Link to="/signup">Don't Have an account ?</Link>
                </div>
              </div>
              <div className='form-group Buttons'>
                <button className='btn btn-primary form-control rounded px-3 mt-3'>Sign In</button>
              </div>
            </form>
            {error && (
              <Snackbar open={error} autoHideDuration={1000} anchorOrigin={{
                horizontal: 'center',
                vertical: 'top'
              }}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  
                  {errorMsg}
                </Alert>
              </Snackbar>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
