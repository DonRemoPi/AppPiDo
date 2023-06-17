import { InputLabel, MenuItem, Select } from "@mui/material";


const SizeSelector = ({ selectedSize, onSelectedSize }) => {

  return (
    <>
      <InputLabel
        htmlFor="select-size"
        shrink={selectedSize !== ""}
        size="large"
        sx={{
          fontSize: '1.4rem',
          transition: 'opacity 0.2s ease-in-out',
          opacity: selectedSize !== "" ? 0 : 1,
          display: 'flex',
          mt: '-1.2rem',
          '@media (min-width: 600px)': {
            textAlign: 'center',
            marginLeft: '3rem',
            fontSize: '2rem',
            mt: '-.4rem'
          }
        }}
      >
        Tamaño
      </InputLabel>
      <Select
        labelId="select-size"
        id="select-size"
        value={selectedSize}
        onChange={onSelectedSize}
        className="select__icon"
        MenuProps={{
          disableScrollLock: true,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
          PaperProps: {
            style: {
              overflow: 'auto',
            },
          },
        }}
        sx={{
          height: '2.5rem',
          fontSize: '1.2rem',
          '@media (min-width: 600px)': {
            width: '80%',
            margin: 'auto',
            marginTop: 0,
            height: '4rem',
            fontSize: '1.6rem'
          }
        }}
      >
        <MenuItem className='MenuItem' value='r' sx={{ fontSize: '1.2rem' }}>R - Regular</MenuItem>
        <MenuItem className='MenuItem' value='m' sx={{ fontSize: '1.2rem' }}>M - Mediana</MenuItem>
        <MenuItem className='MenuItem' value='g' sx={{ fontSize: '1.2rem' }}>G - Grande</MenuItem>
      </Select>
    </>
  );
};

export default SizeSelector;
