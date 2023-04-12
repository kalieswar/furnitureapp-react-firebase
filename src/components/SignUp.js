import TextField from '@mui/material/TextField';
import { Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button"
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function SignUp (){
    const [name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[CreatedAt,setCreatedAt]=useState();
    const[error,setError]=useState();
    const[success,setSuccess]=useState();
    let getDate = new Date();
    let getMonth = getDate.getMonth() + 1;
    let currentDate = getDate.getDate() + '/' + getMonth + '/' + getDate.getFullYear()
    const navigate = useNavigate()
    const signUser = (e)=>{
        e.preventDefault();
        if(name || email||password||CreatedAt){
        addDoc(collection(db,"users"),{
            name: name,
            email: email,
            password: password,
            CreatedAt: CreatedAt,
            ProfilePic:""
        })
        setSuccess("User added successfully");
        setName(null);
        setEmail(null);
        setPassword(null);
        navigate('/')
    }
        else if(!name || !email || password|| CreatedAt){
            setError("Pls Fill All the Details")
        }
    }
    useEffect(()=>{
        setCreatedAt(currentDate)
    },[currentDate])
        return(
        <Row className="justify-content-center">
            <Col xs={10} lg={5} className="paddingg">
            <form className="shadow-lg p-4" onSubmit={signUser}>  
            <h2 className='text-center'>Sign Up</h2>
            <TextField className="form-control mb-3"  label="User Name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <TextField className="form-control mb-3"  label="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <TextField type={'password'} className="form-control mb-3" label="Password" onChange={(e)=> setPassword(e.target.value)} value={password} />
            <Button type='submit' variant="contained" className="w-100" color="success">
        Sign UP
      </Button>
        </form>
            </Col>
        </Row>
    )
}

export default SignUp;