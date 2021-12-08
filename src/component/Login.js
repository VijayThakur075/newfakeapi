import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { Form,Container, Col } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { setLogIn } from '../action';
import { requestlogin } from '../thunk/userRequest';
import { useHistory } from 'react-router';

export default function Login() {
   const dispatch= useDispatch()
   const history = useHistory();
   const selector =useSelector((state)=> state.login.logindetail)
   const handelChangeInput = (e) => {
        dispatch(setLogIn({...selector, [e.target.name]: e.target.value}))
       
       
}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(selector)
    history.push("/dashboard");
    dispatch(requestlogin(selector));
   
}
const handleClick=(e)=>{
    e.preventDefault()
    history.push("/registration");
}


    return (
        <div>
          <h1>log in page</h1>
<div className="align-center">
            <Form onSubmit={handleSubmit}>
                <Form.Group   className="mb-3">
                   
                <Form.Label >email</Form.Label>
                <Container>
                <Col sm="6">
                <Form.Control type="email" name="email" value={selector.email} onChange={handelChangeInput}/>
                </Col>
                </Container>
                </Form.Group>
                <Form.Group   className="mb-3">
                <Form.Label >password</Form.Label>
                <Col sm="6">
                <Form.Control type="password" name="password" value ={selector.password} onChange={handelChangeInput} />
                </Col>
                </Form.Group> 
                <Button type="submit" varient="danger">submit</Button>
                <Button type="submit" varient="danger" onClick={handleClick}>log out</Button>


                </Form>
                </div>
        </div>
    )
}
