import { useEffect, useState } from 'react';
import { Box, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import ButtonWithModal from './ButtonWithModal';


export const Telephone = ({ product }) => {

  const [code, setCode] = useState('');
  const [selected, setSelected] = useState(false);

  const [telephone, setTelephone] = useState('')
  const [touched, setTouched] = useState(false)

  const [codeError, setCodeError] = useState(false)
  const [telError, setTelError] = useState(false)

  useEffect(() => {
    setTouched(false);
  }, []);

  const handleChange = (event) => {
    setCode(event.target.value);
    setSelected(true);
  };

  const onTelephoneChange = (event) => {
    const tel = event.target.value.replace(/\s/g, ''); // Elimina espacios en blanco del número de teléfono
    setTelephone(tel)
  }


  return (
    <>
      {/* Selector del código de país */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '.5rem',
          width: '100%',
          mt: '3rem',
          '@media (min-width: 1200px)': {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }
        }}
      >

        <Box display='flex' flexDirection='row' gap='1rem' alignItems='center'
          sx={{ '@media (min-width: 1200px)': { width: '40%' } }}
        >
          <Box sx={{ position: 'relative', width: '50%', display: 'flex', alignItems: 'center' }}>

            <InputLabel
              htmlFor="select-code"
              shrink={selected}
              size="large"
              sx={{
                fontSize: '1.8rem',
                transition: 'opacity 0.2s ease-in-out', // Agregamos una transición de opacidad
                opacity: selected ? 0 : 1, // Hacemos que el label desaparezca cuando se selecciona una opción
                position: 'absolute',
                top: '.5rem',
                left: '1rem',
                zIndex: 10,

                '@media (min-width: 600px)': {
                  top: '1.3rem',
                  textAlign: 'left',
                  fontSize: '1.8rem',
                }
              }}
            >
              Código
            </InputLabel>
            <Select
              labelId="select-code"
              id="select-code"
              value={code}
              autoFocus
              onChange={handleChange}
              MenuProps={{
                disableScrollLock: true,
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
                }
              }}
              sx={{
                fontSize: '1.2rem',
                backgroundColor: 'white',
                width: '100%',
                height: '3.5rem',
                '@media (min-width: 600px)': {
                  margin: 'auto',
                  mt: '.5rem',
                  height: '4rem',
                  fontSize: '1.8rem'
                }
              }}
            >
              <MenuItem value={54} sx={{ fontSize: '1.2rem' }}>+54 Argentina </MenuItem>
              <MenuItem value={57} sx={{ fontSize: '1.2rem' }}>+57 Colombia </MenuItem>
              <MenuItem value={52} sx={{ fontSize: '1.2rem' }}>+52 México </MenuItem>
              <MenuItem value={58} sx={{ fontSize: '1.2rem' }}>+58 Venezuela </MenuItem>

            </Select>
          </Box>

          {/* Input del teléfono  */}
          <TextField
            placeholder="Teléfono"
            autoFocus
            error={telephone.length <= 0 && touched}
            helperText={telephone.length <= 0 && touched ? 'Ingrese un valor' : ''}
            value={telephone}
            onChange={onTelephoneChange}
            onBlur={() => setTouched(true)}
            inputProps={{
              style: {
                fontSize: '1.8rem', // Ajusta el tamaño del texto del placeholder
              },
            }}
            FormHelperTextProps={{
              style: {
                fontSize: '1.4rem', // Ajusta el tamaño del texto del helperText
              },
            }}

            sx={{
              width: '50%',
              backgroundColor: 'white',
              height: '3.5rem',
              fontSize: '1.4rem',
              '& .MuiOutlinedInput-root': {
                height: '100%', // Ajusta la altura del input al 100% del contenedor
                '& fieldset': {
                  borderWidth: '1px', // Ajusta el ancho del borde
                },
              },
              '@media (min-width: 600px)': {
                mt: '.5rem',
                height: '4rem',
                fontSize: '1.8rem',
              },
            }}
          />
        </Box>
        {/* Botones cancelar y confirmar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            '@media (min-width: 1200px)': {
              width: '50%'
            }
          }}
        >
          <ButtonWithModal
            title='CANCELAR'
            setTelephone={setTelephone}
            setCode={setCode}
          />
          <ButtonWithModal
            title='CONFIRMAR'
            telephone={telephone}
            setTelephone={setTelephone}
            code={code}
            setCode={setCode}
            setCodeError={setCodeError}
            setTelError={setTelError}
            product={product}
          />
        </Box>

      </Box>
      {codeError ? <p className="error_message">Seleccione un código</p> : null}
      {telError ? <p className="error_message">Ingrese un número de teléfono Válido</p> : null}

    </>
  )
}