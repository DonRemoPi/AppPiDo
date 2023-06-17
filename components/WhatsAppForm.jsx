import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const countries = [
  { code: '+1', name: 'USA' },
  { code: '+44', name: 'UK' },
  { code: '+61', name: 'Australia' },
  // Agrega más países si es necesario
];

export default function WhatsAppForm() {
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [total, setTotal] = useState('');

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleTotalChange = (event) => {
    setTotal(event.target.value);
  };

  const handleSubmit = () => {
    const message = `Pedido: Producto - ${product}, Cantidad - ${quantity}, Total - ${total}`;

    const formattedPhoneNumber = phoneNumber.replace(/\s/g, ''); // Elimina espacios en blanco del número de teléfono
    const whatsappLink = `https://wa.me/${countryCode}${formattedPhoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink);
  };

  return (
    <div>
      <h1>Enviar Pedido por WhatsApp</h1>

      <FormControl>
        <InputLabel id="countryCodeLabel">Código de País</InputLabel>
        <Select
          labelId="countryCodeLabel"
          value={countryCode}
          onChange={handleCountryCodeChange}
        >
          {countries.map((country) => (
            <MenuItem key={country.code} value={country.code}>
              {country.name} ({country.code})
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Número de Teléfono"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />

      <TextField
        label="Producto"
        value={product}
        onChange={handleProductChange}
      />

      <TextField
        label="Cantidad"
        value={quantity}
        onChange={handleQuantityChange}
      />

      <TextField
        label="Total"
        value={total}
        onChange={handleTotalChange}
      />

      <Button variant="contained" onClick={handleSubmit}>
        Enviar por WhatsApp
      </Button>
    </div>
  );
}
