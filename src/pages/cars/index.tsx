import React from 'react'
import { Box, Button, CircularProgress, Container, Typography } from '@mui/material'
import CarItem from './components/car-item'
import { Car } from '../../types'
import { useGetAllCarsQuery } from '../../store/cars/services'
import { BASE_API_URL } from '../../constants'

const CarsPage: React.FC = () => {

  const { data, error, isLoading: isCarsLoading } = useGetAllCarsQuery()

  React.useEffect(() => {
    console.log('CARS API: ', BASE_API_URL + '/cars')
    console.log('useGetAllCarsQuery: ', data);
  }, [data]);

  const handleAddNewCar = () => {

  }

  const renderCars = () => {
    if (isCarsLoading) {
      return <CircularProgress />
    };
    if (!data?.data) {
      return <Typography>No cars available</Typography>
    }
    return data.data.map((item:Car) => <CarItem {...{ item }} key={item.id} />)
  }

  return (
    <Container maxWidth='lg'>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component='p'>Cars list</Typography>
          <Button onClick={handleAddNewCar} variant='outlined'>Add</Button>
        </Box>

        <Box height={50} />
        {renderCars()}
      </Box>
    </Container>
)
}

export default CarsPage;
