import { Button, Form } from 'react-bootstrap';

import { FormContainer } from '../components';

const LoginScreen = () => (
  <FormContainer>
    <h1>Login</h1>
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </FormContainer>
);

export default LoginScreen;
