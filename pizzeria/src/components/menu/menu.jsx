import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, ListGroup, Carousel } from 'react-bootstrap';

const Catalogo = () => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const divisa = '$';

  useEffect(() => {
    const baseDeDatos = [
      {
        id: 1, nombre: 'Playera Edición Limitada Hombre', precio: 100, imagenes: [
          'https://www.cheesepizza.com.mx/img/pizzas/mexicana-1.png',
          'https://www.cheesepizza.com.mx/img/pizzas/mexicana-2.png',
          'https://www.cheesepizza.com.mx/img/pizzas/mexicana-3.png'
        ]
      },
      {
        id: 2, nombre: 'Sudadera Hombre', precio: 170, imagenes: [
          'https://www.cheesepizza.com.mx/img/pizzas/Country-1.png',
          'https://www.cheesepizza.com.mx/img/pizzas/Country-2.png',
          'https://www.cheesepizza.com.mx/img/pizzas/Country-3.png'
        ]
      },
      {
        id: 3, nombre: 'Pants Hombre', precio: 120, imagenes: [
          'https://www.cheesepizza.com.mx/img/pizzas/Hawai-1.png',
          'https://www.cheesepizza.com.mx/img/pizzas/Hawai-2.png',
          'https://www.cheesepizza.com.mx/img/pizzas/Hawai-3.png'
        ]
      },
      {
        id: 4, nombre: 'Short Hombre', precio: 110, imagenes: [
          'https://www.cheesepizza.com.mx/img/pizzas/ranchera-1.png',
          'https://www.cheesepizza.com.mx/img/pizzas/ranchera-2.png',
          'https://www.cheesepizza.com.mx/img/pizzas/ranchera-3.png'
        ]
      },
      {
        id: 5, nombre: 'Playera Edición Limitada Mujer', precio: 100, imagenes: [
          '/images/playeraBlancaM.jpg',
          '/images/playeraGrisM.jpg',
          '/images/playeraNegraM.jpg',
          '/images/playeraRosaM.jpg'
        ]
      },
      {
        id: 6, nombre: 'Sudadera Mujer', precio: 170, imagenes: [
          '/images/sudaderaBeigeM.jpg',
          '/images/sudaderaBlancaM.jpg',
          '/images/sudaderaGrisM.jpg',
          '/images/sudaderaNegraM.jpg'
        ]
      },
      {
        id: 7, nombre: 'Pants Mujer', precio: 120, imagenes: [
          '/images/pantsAzulM.jpg',
          '/images/pantsBeigeM.jpg',
          '/images/pantsGrisM.jpg',
          '/images/pantsNegroM.jpg'
        ]
      },
      {
        id: 8, nombre: 'Short Mujer', precio: 110, imagenes: [
          '/images/shortGrisM.jpg',
          '/images/shortNegroM.jpg',
          '/images/shortBeigeM.jpg',
          '/images/shortBlancoM.jpg'
        ]
      },
      {
        id: 9, nombre: 'Mochila', precio: 130, imagenes: [
          '/images/mochilaAzul.jpg',
          '/images/mochilaBeige.jpg',
          '/images/mochilaBlanca.jpg',
          '/images/mochilaNegra.jpg'
        ]
      },
      {
        id: 10, nombre: 'Llavero', precio: 30, imagenes: [
          'https://www.cheesepizza.com.mx/img/pizzas/vegetariana-1.png',
          'https://www.cheesepizza.com.mx/img/pizzas/vegetariana-2.png',
          'https://www.cheesepizza.com.mx/img/pizzas/vegetariana-3.png'
        ]
      },
      {
        id: 11, nombre: 'Gorra', precio: 80, imagenes: [
          'https://www.cheesepizza.com.mx/img/pizzas/vegetariana-1.png',
          'https://www.cheesepizza.com.mx/img/pizzas/vegetariana-2.png',
          'https://www.cheesepizza.com.mx/img/pizzas/vegetariana-3.png'
        ]
      },
      {
        id: 12, nombre: 'Termo', precio: 90, imagenes: [
          'https://www.cheesepizza.com.mx/img/pizzas/vegetariana-1.png',
          'https://www.cheesepizza.com.mx/img/pizzas/vegetariana-2.png',
          'https://www.cheesepizza.com.mx/img/pizzas/vegetariana-3.png'
        ]
      },
      {
        id: 13, nombre: 'Libreta', precio: 40, imagenes: [
          'https://www.cheesepizza.com.mx/img/pizzas/vegetariana-1.png',
          'https://www.cheesepizza.com.mx/img/pizzas/vegetariana-2.png',
          'https://www.cheesepizza.com.mx/img/pizzas/vegetariana-3.png'
        ]
      },
    ];
    setProductos(baseDeDatos);
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

  const aumentarCantidadProducto = (id) => {
    setCarrito([...carrito, id]);
  };

  const disminuirCantidadProducto = (id) => {
    const index = carrito.indexOf(id);
    if (index !== -1) {
      const newCarrito = [...carrito];
      newCarrito.splice(index, 1);
      setCarrito(newCarrito);
    }
  };

  const calcularTotal = () => {
    return carrito.reduce((total, id) => {
      const producto = productos.find((p) => p.id === id);
      return total + producto.precio;
    }, 0).toFixed(2);
  };

  const renderizarCarrito = () => {
    const carritoSinDuplicados = [...new Set(carrito)];
    return carritoSinDuplicados.map((id, index) => {
      const producto = productos.find((p) => p.id === id);
      const cantidad = carrito.filter((itemId) => itemId === id).length;
      return (
        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
          {`${cantidad} x ${producto.nombre} - ${divisa}${producto.precio}`}
          <div>
            <Button variant="secondary" onClick={() => aumentarCantidadProducto(id)}>+</Button>
            <Button variant="secondary" onClick={() => disminuirCantidadProducto(id)}>-</Button>
            <Button variant="danger" onClick={() => borrarProductoDelCarrito(id)}>X</Button>
          </div>
        </ListGroup.Item>
      );
    });
  };

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Row>
            {productos.map((producto) => (
              <Col sm={4} key={producto.id}>
                <Card className="mb-4">
                  <Carousel>
                    {producto.imagenes.map((imagen, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="d-block w-100"
                          src={imagen}
                          alt={`Slide ${index + 1}`}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{`${divisa}${producto.precio}`}</Card.Text>
                    <Button variant="primary" onClick={() => agregarProductoAlCarrito(producto.id)}>Agregar</Button>
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
          <p className="text-right">Total: <span>{divisa}{calcularTotal()}</span></p>
          <Button variant="danger" onClick={vaciarCarrito}>Vaciar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Catalogo;