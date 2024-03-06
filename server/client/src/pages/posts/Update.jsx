import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { DangerAlert } from "../../Components/CustomAlert.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { updatePost } from "../../controllers/postController.js";

const Update = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [error, setError] = useState("");
  const [formData, setformData] = useState({
    title: state.title,
    body: state.body,
  });

  const handleUpdate = async () => {
    try {
      const data = await updatePost(state._id, formData.title, formData.body);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <Card className="bg-body-tertiary">
        <Card.Body>
          <Card.Title>Update your post</Card.Title>
          <Card.Body>
            <FloatingLabel label="Post Title" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Post Title"
                value={formData.title}
                onChange={(e) =>
                  setformData({ ...formData, title: e.target.value })
                }
              />
            </FloatingLabel>
            <FloatingLabel label="Post Content">
              <Form.Control
                as="textarea"
                style={{ height: "200px" }}
                placeholder="Post Content"
                value={formData.body}
                onChange={(e) =>
                  setformData({ ...formData, body: e.target.value })
                }
              />
            </FloatingLabel>
          </Card.Body>
          <Button
            variant="primary"
            className="d-flex ms-auto"
            onClick={handleUpdate}
          >
            Update
          </Button>
          {error && <DangerAlert error={error} />}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Update;
