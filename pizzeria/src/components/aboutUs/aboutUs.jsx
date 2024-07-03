import React from 'react';

const AboutUs = () => {
  const team = [
    {
      name: 'Lorena',
      role: 'CEO & Founder',
      description: 'Lorena tiene más de 5 años de experiencia en la industria de la pizza y es la fundadora de nuestra pizzería. Su visión y liderazgo nos han llevado al éxito.',
      image: '/images/lore.jpg',
    },
    {
      name: 'Camila',
      role: 'Head Chef',
      description: 'Camila es nuestra chef principal y tiene un talento increíble para crear nuevas recetas de pizza. Su pasión por la cocina es evidente en cada plato que prepara.',
      image: '/images/cami.jpg',
    },
  ];

  return (
    <div className="container mt-4">
      <h1 style={{ textAlign: 'center', marginBottom:'50px'}}>Nosotros</h1>
      <div className="row">
        {team.map((member, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 border-0 shadow-sm" style={{backgroundColor:'white'}}>
              <img src={process.env.PUBLIC_URL + member.image} className="card-img-top" alt={member.name} style={{ width: '300px', height: '300px', objectFit: 'cover', margin: 'auto', borderRadius: '100%', marginTop: '20px'}} />
              <div className="card-body text-center">
                <h5 className="card-title mt-3">{member.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

