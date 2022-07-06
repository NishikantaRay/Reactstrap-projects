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
  CardLink,
} from "reactstrap";
import axios from "axios";
const baseURL ="https://jsonplaceholder.typicode.com/photos";
export default function Gallery() {
    const [media, setMedia] = React.useState(null);
  const [error, setError] = React.useState(null);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setMedia(response.data);
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
            {media.slice(1, 10).map((media) => (
                <Col md="4" key={media.id}>
                    <Card>
              <CardBody>
                <CardTitle tag="h5">{media.title}</CardTitle>
              </CardBody>
              <img
                alt="Card image cap"
                src={media.url}
                width="100%"
              />
              <CardBody>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
            </Col>
            ))}

          
            
         
        </Row>
      </Container>
    </div>
  );
}
