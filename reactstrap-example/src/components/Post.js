import React from "react";
import { useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardHeader,
  CardFooter,
} from "reactstrap";
import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com/posts";
export default function Post() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Container className="mt-5 ">
        <Row>
            {post.slice(1, 10).map((post) => (
                <Col md="4" key={post.id}>
                    <Card className="m-2">
                    <CardHeader className="text-center">Header</CardHeader>
                        
                        <CardBody>
                        <CardTitle>Title- {post.title}</CardTitle>
                            
                            <CardText>{post.body}</CardText>
                        </CardBody>
                        <CardFooter className="text-center">Footer</CardFooter>
                    </Card>
                </Col>
            ))}
          
          
        </Row>
      </Container>
    </div>
  );
}
