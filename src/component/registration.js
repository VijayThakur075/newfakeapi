import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../action";
import {Button} from "react-bootstrap";
import { requestUser } from "../thunk/userRequest";
import { useHistory } from "react-router";

function Registration(){
    const dispatch=useDispatch();
    const history=useHistory()
    const userdetail= useSelector((state) => state.user.userdetail)
    

    const handelChangeInput = (e) => {
            dispatch(setUser({...userdetail, [e.target.name]: e.target.value}))
           
    }

    const handleSubmit=(e)=>{
            e.preventDefault()
            console.log(userdetail)
            dispatch(requestUser(userdetail));
            history.push('/login')
    }
    
    return(
        <div>
            <h1>registration page...</h1>
           <Form onSubmit={handleSubmit}>
                <Form.Group  as={Row} className="mb-3">
                <Form.Label >email</Form.Label>
                <Col sm="6">
                <Form.Control type="email" name="email" value={userdetail.email}  onChange={handelChangeInput}/>
                </Col>
                </Form.Group>
                <Form.Group  as={Row} className="mb-3">
                <Form.Label >password</Form.Label>
                <Col sm="6">
                <Form.Control type="password" name="password" value={userdetail.password} onChange={handelChangeInput} />
                </Col>
                </Form.Group> 
                <Button type="submit" varient="danger">submit</Button>

             </Form> 
        </div>
    )
}

export default Registration;