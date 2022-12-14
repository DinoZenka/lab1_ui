import React from 'react'
import { Car } from '../../../../types'
import {Box, Button, Tooltip, Typography} from '@mui/material'
import {styles} from './styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type IProps = Car & {
    createdAt: string,
    onEdit: (id: string) => void
    onDelete: (id: string) => void
}

const CarItem: React.FC<IProps> = ({ model, country, year, price, id, createdAt, onEdit, onDelete }) =>{

  const handleEditClicked = () => {
      onEdit(id);
  }
  const handleDeleteClicked = () => {
      onDelete(id);
  }

  const normalizeDate = (data: string) => {
      const date = new Date(data);
      return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }

  return (
      <Box sx={styles.container}>
        <Typography>Model: {model}</Typography>
        <Typography>Country: {country}</Typography>
        <Typography>Price: {price}</Typography>
        <Typography>Year: {year}</Typography>
          <Tooltip title='Edit car'>
              <Button sx={[styles.button, styles.editButton]} onClick={handleEditClicked}><EditIcon /></Button>
          </Tooltip>
          <Tooltip title='Delete car'>
              <Button sx={[styles.button, styles.deleteButton]} onClick={handleDeleteClicked}><DeleteOutlineIcon /></Button>
          </Tooltip>
          <Tooltip title='Creation date'>
              <Typography sx={styles.creationDate}>{normalizeDate(createdAt)}</Typography>
          </Tooltip>
      </Box>
  )
}

export default CarItem;
