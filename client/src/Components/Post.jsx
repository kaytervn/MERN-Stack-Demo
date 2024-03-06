import Card from "react-bootstrap/Card";

const Post = ({ post, children }) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between mb-0">
          <div>
            <p className="text-primary mb-0">{post.title}</p>
            <p style={{ fontSize: "12px" }}>
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div>{children}</div>
        </Card.Title>
        <div>{post.body}</div>
      </Card.Body>
    </Card>
  );
};

export default Post;
