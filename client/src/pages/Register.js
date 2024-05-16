import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Inputs from "../components/Inputs";
import { Registration } from "../redux/actions/authActions";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(Registration(form, navigate));
  };

  return (
    <Container fluid>
          <div className="d-flex align-items-center mb-2 m-lg-5">
              <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i>
              <h2>Register</h2>
            </div>
      <Row className=" m-lg-5 p-4 d-flex flex-row justify-content-center align-items-center shadow-lg bg-white rounded ">
        
        <Col>
    
              
           
            <Form onSubmit={onSubmit} className="w-100">
              <Inputs
                name="name"
                label="Name"
                type="text"
                icon="fa-solid fa-user"
                onChangeHandler={onChangeHandler}
                errors={errors.name}
              />
              <Inputs
                name="email"
                label="Email"
                type="text"
                icon="fa-solid fa-at"
                onChangeHandler={onChangeHandler}
                errors={errors.email}
              />
              <Inputs
                name="password"
                label="Password"
                type="password"
                icon="fa-solid fa-key"
                onChangeHandler={onChangeHandler}
                errors={errors.password}
              />
              <Inputs
                name="confirm"
                label="Confirm password"
                type="password"
                icon="fa-solid fa-key"
                onChangeHandler={onChangeHandler}
                errors={errors.confirm}
              />
            
              <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                  Save <i className="fa-solid fa-floppy-disk"></i>
                </Button>
                <Link to="/register">I already have an account</Link>
              </div>
            </Form>
        
        </Col >
        <Col className="d-flex flex-row justify-content-center align-items-end">
            <img
              src="/images/signup-image.jpg"
              alt="Signup"
              className="img-fluid"
              style={{ maxWidth: "80%", maxHeight: "80%", objectFit: "cover" }}
            />
        </Col>
       

      </Row>
    
    </Container>
  );
}

export default Register;
