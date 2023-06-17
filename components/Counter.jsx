import { Button, Box, Stack, Typography } from '@mui/material';



export default function Counter({ currentValue, updatedQuantity, maxValue }) {



  const addOrRemove = (value) => {
    if (value === -1) {
      if (currentValue === 1) return;
      return updatedQuantity(currentValue - 1);
    }

    if (currentValue >= maxValue) return;

    updatedQuantity(currentValue + 1)

  };

  return (
    <Stack
      direction='row'
      sx={{
        width: '100%'
      }}
    >

      {/* - Reducir cantidad */}
      <Button
        disabled={currentValue === 1}
        onClick={() => addOrRemove(-1)}
        className="Button"
        sx={{
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-white)',
          height: '2.5rem',
          minWidth: '2.5rem',
          width: '25%',
          padding: 0,
          fontSize: '1.8rem',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          border: '1px solid var(--color-accent)',
          '@media (min-width: 600px)': {
            height: '4rem',
            fontSize: '3rem',
            borderRadius: '.8rem',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
          '&:hover': {
            backgroundColor: '#c71e00',
          }
        }}
      >
        -
      </Button>
      <Box
        sx={{
          backgroundColor: 'var(--color-white)',
          minWidth: '3.5rem',
          width: '50%',
          height: '2.5rem',
          border: '1px solid var(--color-gray)',
          borderLeft: 'none',
          borderRight: 'none',
          '@media (min-width: 600px)': {
            height: '4rem'
          }
        }}
      >
        <Typography
          variant='h5'
          sx={{
            textAlign: 'center',
            height: '100%',
            lineHeight: '2.4rem',
            color: 'var(--color-gray)',
            '@media (min-width: 600px)': {
              fontSize: '1.8rem',
              lineHeight: '4rem',
            },
          }}
        >
          {currentValue}
        </Typography>
      </Box>

      {/* + Aumentar cantidad */}
      <Button
        disabled={currentValue === { maxValue }}
        onClick={() => addOrRemove(+1)}
        sx={{
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-white)',
          height: '2.5rem',
          minWidth: '2.5rem',
          width: '25%',
          padding: 0,
          fontSize: '1.4rem',
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          border: '1px solid var(--color-accent)',
          '@media (min-width: 600px)': {
            height: '4rem',
            fontSize: '2.4rem',
            borderRadius: '.8rem',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          '&:hover': {
            backgroundColor: '#c71e00',
          }
        }}
      >
        +
      </Button>

    </Stack>
  )
}




