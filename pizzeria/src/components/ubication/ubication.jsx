import React from 'react';

const ubication = [
  {
    nombre: 'Sucursal Norte',
    descripcion: '<strong>Dirección:</strong> Prol Zaragoza 103 Loc -b Col Villas de San Nicolas Aguascalientes, Ags.<br><strong>Teléfono:</strong> 449-912-1024.<br>Nuestra sucursal en el norte de la ciudad, con amplio estacionamiento y zona de juegos para niños.',
    imagen: 'https://lh5.googleusercontent.com/p/AF1QipNLN8PqymdY4lLXH2QWhN3zvnPPHfCIrh8LJ_ha',
    latlng: { lat: 19.4978, lng: -99.1269 }, // Coordenadas de la Sucursal Norte (ejemplo)
  },
  {
    nombre: 'Sucursal Centro',
    descripcion: '<strong>Dirección:</strong> Av Convencion Poniente No. 101 Fracc. del Valle 1a Seccion Aguascalientes, Ags.<br><strong>Teléfono:</strong> 449-913-5860.<br>Ubicada en el corazón de la ciudad, ofrece un ambiente acogedor y las mejores pizzas.',
    imagen: 'https://pr0.nicelocal.es/NtjdvBquilAjQF4ITxPEDg/640x427,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2WO-jv8QZZ9z2GBaDeRM03ScMPh_APhIPsksBf3ZCM1B_5chBB0QnAUuNc1RCsFsUw',
    latlng: { lat: 19.4326, lng: -99.1332 }, // Coordenadas de la Sucursal Centro (ejemplo)
  },
  {
    nombre: 'Sucursal Sur',
    descripcion: '<strong>Dirección:</strong> Jose Maria Chavez # 202 esq. Av. Aguascalientes Col Jardines de las Fuentes Aguascalientes, Ags.<br><strong>Teléfono:</strong> 449-913-5860.<br>Disfruta de nuestras pizzas en el sur de la ciudad, con una terraza al aire libre.',
    imagen: 'https://lh5.googleusercontent.com/p/AF1QipNgPxosnc6lLgk9WUZK3QEk0k5rhpbVxD13NO88',
    latlng: { lat: 19.3439, lng: -99.1562 }, // Coordenadas de la Sucursal Sur (ejemplo)
  }
];

const Ubication = () => (
  <div className="container mt-4">
    <h1 style={{ textAlign: 'center', marginBottom:'50px' }}>Ubicaciones</h1>
    <div className="row">
      {ubication.map((sucursal, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card">
            <img src={sucursal.imagen} className="card-img-top circular-img" alt={sucursal.nombre} />
            <div className="card-body" style={{ backgroundColor:'white',borderRadius: '5px' }} >
              <h5 className="card-title">{sucursal.nombre}</h5>
              <p className="card-text" dangerouslySetInnerHTML={{ __html: sucursal.descripcion }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Ubication;