import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import CarItem from './components/car-item'
import { Car } from '../../types'

const CarsPage: React.FC = () => {

  const carsResponcce: Car[] = [
    {
      id: '1',
      model: 'BMW',
      country: 'USA',
      year: 2005,
      price: 5000,
    },
    {
      id: '2',
      model: 'BMW',
      country: 'USA',
      year: 2007,
      price: 5400,
    },
    {
      id: '3',
      model: 'BMW',
      country: 'Korea',
      year: 2010,
      price: 6000,
    }
  ]
  const [cars, setCars] = React.useState(carsResponcce);
  const handleAddNewCar = () => {
    const newCar: Car = { id: '8', model: '', year: 0, country: '', price: 0};
    setCars((prev: Car[]) => [newCar, ...prev]);
  }

  return (
    <Container maxWidth='lg'>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component='p'>Cars list</Typography>
          <Button onClick={handleAddNewCar} variant='outlined'>Add</Button>
        </Box>

        <Box height={50} />
        { cars.map((item:Car) => <CarItem {...{ item }} key={item.id} />)}
      </Box>
    </Container>
)
}

export default CarsPage;
