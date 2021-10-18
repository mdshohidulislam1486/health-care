import React from 'react';
import { Button, Form} from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {sinInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegistration, error, loginUpdate} = useAuth()
    
   console.log(handleRegistration)

    return (
        <div className='container'>
            
             <Form onSubmit={handleRegistration} className='w-75 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label aria-required>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                        <p className='text-danger'>{error}</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={loginUpdate} type="checkbox" label="Alredy have an account?" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className='text-center'>
                <Button onClick={sinInUsingGoogle} variant='success'><i className="fab fa-google text-warning "></i></Button>
                </div>
            
        </div>
    );
};

export default Login;