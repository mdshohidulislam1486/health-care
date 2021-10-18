import React from 'react';
import { Button, Form} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {sinInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegistration, error, loginUpdate, isLoged, user} = useAuth()
    
   console.log(handleRegistration)

    return (
        <div className='container'>
    
            
             {user?.email ?
              <div className='text-center mt-5 mb-2'>
                  <NavLink to='/home'><Button  variant='warning'>Go to Home</Button></NavLink>
              </div>
             : <Form onSubmit={handleRegistration} className='w-75 mx-auto'>
                    <h2 className='text-success'>Please {isLoged ? 'Login' :'Register'}</h2>
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
                        {isLoged ? "Login" : 'Register'}
                    </Button>
                </Form> 
                }
                <div className='text-center'>
                <Button onClick={sinInUsingGoogle} variant='success'> Log inwith Google <i className="fab fa-google text-warning "></i></Button>
                </div>
            
        </div>
    );
};

export default Login;