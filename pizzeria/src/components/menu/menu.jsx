import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Menu = () => {
  const [selectedPizza, setSelectedPizza] = useState(null);

  const pizzas = [
    { name: 'Mexicana', ingredients: ['Jitomate', 'Queso', 'Jamón', 'Jalapeño', 'Cebolla', 'Chorizo'], image: 'https://www.cheesepizza.com.mx/img/pizzas/mexicana.png' },
    { name: 'Country', ingredients: ['Salami', 'Peperoni', 'Tocino', 'Champiñones', 'Cebolla', 'Queso'], image: 'https://www.cheesepizza.com.mx/img/pizzas/Country.png' },
    { name: 'Hawaiana', ingredients: ['Queso', 'Jamón', 'Piña'], image: 'https://www.cheesepizza.com.mx/img/pizzas/Hawai.png' },
    { name: 'Ranchera', ingredients: ['Queso', 'Frijoles', 'Chorizo', 'Aguacate', 'Jalapeño'], image: 'https://www.cheesepizza.com.mx/img/pizzas/ranchera.png' },
    { name: 'Meat', ingredients: ['Queso', 'Jamón', 'Chorizo', 'Peperoni', 'Salami'], image: 'https://www.cheesepizza.com.mx/img/pizzas/meat.png' },
    { name: 'Vegetariana', ingredients: ['Queso', 'Champiñon', 'Piña', 'Pimiento', 'Aceituna'], image: 'https://www.cheesepizza.com.mx/img/pizzas/vegetariana.png' },
  ];

  const handleToggleIngredients = (pizza) => {
    if (selectedPizza && selectedPizza.name === pizza.name) {
      setSelectedPizza(null);
    } else {
      setSelectedPizza(pizza);
    }
  };

  return (
    <div className="menu md-4">
      <h1 style={{ textAlign: 'center', marginBottom:'50px' }}>Menú</h1>
      <div className="container md-4"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '10px',
        }}
      >
        <div className="row justify-content-center">
          {pizzas.map((pizza, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex justify-content-center">
              <Card style={{ width: '18rem', border: 'none' }}>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff6347' }}>
                  {pizza.name}
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={pizza.image}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleToggleIngredients(pizza)}
                />
                <Card.Body style={{ minHeight: selectedPizza && selectedPizza.name === pizza.name ? '100px' : '150px' }}>
                  <Button
                    variant="primary"
                    style={{ backgroundColor: '#ff6347', borderColor: '#ff6347' }}
                    onClick={() => handleToggleIngredients(pizza)}
                  >
                    Ver Ingredientes {selectedPizza && selectedPizza.name === pizza.name ? <FaChevronUp /> : <FaChevronDown />}
                  </Button>
                  {selectedPizza && selectedPizza.name === pizza.name && (
                    <div style={{ marginTop: '10px', backgroundColor:'white', borderRadius:'7px' }}>
                      <p>{selectedPizza.ingredients.join(', ')}</p>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
