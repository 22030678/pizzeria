import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const divisa = '€';

  useEffect(() => {
    const baseDeDatos = [
      { id: 1, nombre: 'Mexicana', precio: 10, imagen: 'https://www.cheesepizza.com.mx/img/pizzas/mexicana.png' },
      { id: 2, nombre: 'Country', precio: 12, imagen: 'https://www.cheesepizza.com.mx/img/pizzas/Country.png' },
      { id: 3, nombre: 'Hawaiana', precio: 8, imagen: 'https://www.cheesepizza.com.mx/img/pizzas/Hawai.png' },
      { id: 4, nombre: 'Ranchera', precio: 11, imagen: 'https://www.cheesepizza.com.mx/img/pizzas/ranchera.png' },
      { id: 5, nombre: 'Meat', precio: 14, imagen: 'https://www.cheesepizza.com.mx/img/pizzas/meat.png' },
      { id: 6, nombre: 'Vegetariana', precio: 9, imagen: 'https://www.cheesepizza.com.mx/img/pizzas/vegetariana.png' },
    ];
    setPizzas(baseDeDatos);
  }, []);

  const agregarProductoAlCarrito = (id) => {
    setCarrito([...carrito, id]);
  };

  const borrarProductoDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, id) => {
      const pizza = pizzas.find((p) => p.id === id);
      return total + pizza.precio;
    }, 0).toFixed(2);
  };

  const renderizarCarrito = () => {
    const carritoSinDuplicados = [...new Set(carrito)];
    return carritoSinDuplicados.map((id, index) => {
      const pizza = pizzas.find((p) => p.id === id);
      const cantidad = carrito.filter((itemId) => itemId === id).length;
      return (
        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
          {`${cantidad} x ${pizza.nombre} - ${pizza.precio}${divisa}`}
          <Button variant="danger" onClick={() => borrarProductoDelCarrito(id)}>X</Button>
        </ListGroup.Item>
      );
    });
  };

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Row>
            {pizzas.map((pizza) => (
              <Col sm={4} key={pizza.id}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={pizza.imagen} />
                  <Card.Body>
                    <Card.Title>{pizza.nombre}</Card.Title>
                    <Card.Text>{`${pizza.precio}${divisa}`}</Card.Text>
                    <Button variant="primary" onClick={() => agregarProductoAlCarrito(pizza.id)}>Agregar</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col sm={4}>
          <h2>Carrito</h2>
          <ListGroup>
            {renderizarCarrito()}
          </ListGroup>
          <hr />
          <p className="text-right">Total: <span>{calcularTotal()}</span>&euro;</p>
          <Button variant="danger" onClick={vaciarCarrito}>Vaciar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
