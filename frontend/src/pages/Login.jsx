import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState();

  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: "500px" }} className="bg-body-tertiary">
        <Card.Body>
          <Card.Title>Login to your account</Card.Title>
          <Card.Body>
            <FloatingLabel label="Email address" className="mb-3">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Card.Body>
          <Button variant="primary" className="d-flex ms-auto">
            Login
          </Button>
          {error && (
            <Alert variant="danger" className="mt-3">
              <i class="bi bi-exclamation-triangle-fill pe-2"></i>
              {error}
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
