import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const Order = () => {
  const [order, setOrder] = useState([{ pizza: '', size: '', quantity: 1 }]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Orden enviada:', order);
    setShowModal(true); // Muestra el modal de confirmación
    setOrder([{ pizza: '', size: '', quantity: 1 }]); // Resetea el formulario
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedOrder = [...order];
    updatedOrder[index] = { ...updatedOrder[index], [name]: value };
    setOrder(updatedOrder);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container mt-4">
      <h1 style={{ textAlign: 'center', marginBottom:'20px' }}>Orden Online</h1>
      <Form onSubmit={handleSubmit}>
        {order.map((item, index) => (
          <div key={index} className="mb-3">
            <Form.Group controlId={`pizza${index}`}>
              <Form.Label>Pizza</Form.Label>
              <Form.Control
                as="select"
                name="pizza"
                value={item.pizza}
                onChange={(e) => handleChange(e, index)}
              >
                <option value="">Selecciona una pizza...</option>
                <option value="Margarita">Margarita</option>
                <option value="Pepperoni">Pepperoni</option>
                <option value="Hawaiana">Hawaiana</option>
                <option value="Ranchera">Ranchera</option>
                <option value="Meat">Meat</option>
                <option value="Vegetariana">Vegetariana</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId={`size${index}`}>
              <Form.Label>Tamaño</Form.Label>
              <Form.Control
                as="select"
                name="size"
                value={item.size}
                onChange={(e) => handleChange(e, index)}
              >
                <option value="">Selecciona un tamaño...</option>
                <option value="Chica">Chica</option>
                <option value="Mediana">Mediana</option>
                <option value="Grande">Grande</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId={`quantity${index}`}>
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={item.quantity}
                onChange={(e) => handleChange(e, index)}
              />
            </Form.Group>
          </div>
        ))}
        <Button variant="primary" type="submit">Enviar Orden</Button>
      </Form>

      {/* Modal de Confirmación */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación de Orden</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¡Tu orden ha sido enviada con éxito!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Order;