import { useState } from "react"
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Submit')
    }
  return (
    <FormContainer>
        <h1>Sign In</h1>

    <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="Password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">Sign In</Button>
        <Row className="py-3">
            <Col>New customer? <Link to='/register'>Register</Link></Col>
        </Row>
    </Form>
    </FormContainer>
  )
}

export default LoginScreen