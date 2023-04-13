import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logOut } from '../slices/loginSlice';

function Profile() {
    const { user } = useSelector(state => state.loginState)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = ()=>{

        localStorage.removeItem('authToken')
        navigate('/')
        dispatch(logOut())
      }

    return (
        <Container>
            <Row className="justify-content-around mt-5 user-info mb-5">
                <Col xs={12} md={3} className="mb-4">
                    <img className="rounded-circle " src={user.ProfilePic ? user.ProfilePic : "/images/no.webp"} alt="test" width={250} height={250}/>
                </Col>
                <Col xs={12} md={3} className="m-y-4">
                    <h4>Full Name</h4>
                    <p>{user.name}</p>
                    <h4>E-mail</h4>
                    <p>{user.email}</p>
                    <h4>Joined</h4>
                    <p>{user.CreatedAt}</p>
                    <Link to="/savedaddress" className="btn btn-primary">My Address</Link>
                    <button className="btn btn-warning mt-3 px-4" onClick={handleClick}>Log Out</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile