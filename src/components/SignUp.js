import TextField from '@mui/material/TextField';
import { Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Snackbar, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../actions/LoginAction';


function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [error,setError]=useState()
    const {isAuthenticated, errorMsg} =useSelector(state => state.loginState);
    const dispatch =useDispatch()
    const navigate = useNavigate()


    const signUser = (e) => {
        e.preventDefault();
        dispatch(signUp({
            name,
            email, 
            password
        }))
        if(!name || !email || !password){
            setOpen(true)
            setError(errorMsg)
        }
    }


    useEffect(() => {
        if(isAuthenticated){
            navigate('/Home')
            setOpen(false)
        }if(!name || !email || !password){
            setOpen(false)
        }
    }, [isAuthenticated,navigate, errorMsg,email, password,name])
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Row className="justify-content-center">
            <Col xs={10} lg={5} className="paddingg">
                <form className="shadow-lg p-4" onSubmit={signUser}>
                    <h2 className='text-center'>Sign Up</h2>
                    <TextField className="form-control mb-3" label="User Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField className="form-control mb-3" type='email' label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField type={'password'} className="form-control mb-3" label="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <Button type='submit' variant="contained" className="w-100" color="success">
                        Sign UP
                    </Button>
                </form>
                <Snackbar open={open} autoHideDuration={1000} anchorOrigin={{
                    horizontal: 'center',
                    vertical: 'top'
                }}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        {error}
                    </Alert>
                </Snackbar>
            </Col>
        </Row>
    )
}

export default SignUp;