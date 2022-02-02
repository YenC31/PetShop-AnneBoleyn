import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Item = ({ nombre, precio, img, descripcion }) => {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Precio: ${precio}</Card.Text>
        <Card.Text>{descripcion}</Card.Text>
        <br />
        <Button variant="primary">Detalles</Button>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};
