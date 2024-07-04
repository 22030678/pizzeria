import React, { useState, useEffect } from 'react'; // Asegúrate de importar useEffect
import jsPDF from 'jspdf';
import Alert from 'react-bootstrap/Alert';
import { CheckCircle } from 'react-bootstrap-icons';
import JsBarcode from 'jsbarcode';

const Form = () => {    
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };
  
    const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true);
    const doc = new jsPDF();

    // Genera un código de barras
    const canvas = document.createElement('canvas');
    JsBarcode(canvas, "1234567890128", {format: "EAN13"});
    const barcodeDataUrl = canvas.toDataURL("image/jpeg", 1.0);

    // Agrega el nombre y el código de barras al PDF
    doc.setFontSize(20);
    doc.text('Compra en linea', 10, 10);
    doc.setFontSize(16);
    doc.text(`Nombre del comprador: ${name}`, 10, 20);
    doc.addImage(barcodeDataUrl, 'JPEG', 10, 30, 100, 50);
    doc.text(`Recuerda presentar este código de barras al recoger tu compra`, 10, 90);
    doc.save('Formulario.pdf');
};

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showAlert]);
  
    return (
        <div>
            
            <form className='form-disposition' onSubmit={handleSubmit}>
                <label>
                    <h5 className="form-label">Dinos tu nombre</h5>
                    <input className="form-control" type="text" value={name} onChange={handleNameChange} />
                </label>
                <label>
                    <h5 className="form-label">Dejanos un numero telefonico</h5>
                    <input className="form-control" type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
                </label>
                <label>
                    <h5 class="form-label">Elige la forma de entrega.</h5>
                    <select class="form-select" aria-label="forma de entrega">
                        <option selected>Recojer en tienda</option>
                        <option value="1">Recojer en vigilancia</option>
                    </select>
                </label>
                <label>
                    <h5 class="form-label">Dinos tu talla</h5>
                    <select class="form-select" aria-label="Talla">
                        <option selected>XS</option> 
                        <option value="1">S</option>
                        <option value="2">M</option>
                        <option value="3">L</option>
                        <option value="4">XL</option>
                        <option value="5">XXL</option>
                    </select>
                </label>
                <label>
                    <h5 class="form-label">Elige cómo pagar</h5>
                    <select class="form-select" aria-label="forma de entrega">
                        <option selected>Pagar en tienda</option>
                        <option value="1">Transferencia bancaria</option>
                        <option value="2">Efectivo en puntos de pago</option>
                        <option value="3">Tarjeta de crédito</option>
                        <option value="4">Tarjeta de débito</option>
                    </select>
                </label>
                
                <button type="submit" className="btn btn-primary">Confirmar compra</button>
                {showAlert && (
                    <Alert variant="success" className="alert-floating">
                        <CheckCircle /> La compra fue realizada
                    </Alert>
                )}

  

            </form>
        </div>
        

      
    );
}

export default Form;