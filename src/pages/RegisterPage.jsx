import { useState } from "react";
import axiosInstance from "../utils/axiosConfig";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Alert,
  Spinner,
} from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa"; // Importing icons
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate(); // Using useNavigate hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post("/users/register", formData);
      setSuccess(response.data.message); // Success message from backend
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
          <div className="bg-light p-4 rounded shadow-lg">
            {" "}
            {/* Added shadow-lg */}
            <h2 className="text-center mb-4">Register</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicRole" className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  as="select"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="admin">Admin</option>
                </Form.Control>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 shadow" // Added shadow to button
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" /> Loading...
                  </>
                ) : (
                  "Register"
                )}
              </Button>
            </Form>
            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}
            {success && (
              <Alert variant="success" className="mt-3">
                {success}
              </Alert>
            )}
            {/* Right-aligned "Already have an account?" with login button */}
            <div className="text-end mt-3">
              <Button
                variant="link"
                onClick={() => navigate("/login")} // Navigate to login page
                className="d-flex align-items-center justify-content-end"
              >
                <FaSignInAlt className="me-2" />
                Already have an account? Login
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
