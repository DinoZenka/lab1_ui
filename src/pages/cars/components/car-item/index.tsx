import React from 'react'
import { Car } from '../../../../types'
import { Box, Container, Typography } from '@mui/material'

const CarItem: React.FC<{
  item: Car
}> = ({ item }) =>{
  const { model, country, year, price, id } = item;
  return (
      <Box sx={{ width: 150, border: '1px solid grey', borderRadius: '20px', padding: '20px', display: 'inline-block', margin: '10px'}}>
        <Typography>Model: {model}</Typography>
        <Typography>Country: {country}</Typography>
        <Typography>Price: {price}</Typography>
        <Typography>Year: {year}</Typography>
      </Box>
  )
}

export default CarItem;
