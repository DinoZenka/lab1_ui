import React from 'react'
import {Box, Button, CircularProgress, Container, Tooltip, Typography} from '@mui/material'
import CarItem from './components/car-item'
import { Car } from '../../types'
import {useGetAllCarsQuery, useAddCarMutation, useDeleteCarMutation, useEditCarMutation, carFilters} from '../../store/cars/services'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';
import { styles } from './styles';
import CarModal from '../../components/CarModal';
import Modal from '../../components/Modal';
import {errorNotification, successNotification} from '../../helpers';
import CarFilters from './components/filters';

const CarsPage: React.FC = () => {
  const defaultFilters: carFilters = { filter: { model: '' }, sort: 'price_DESC' };
  const [filters, setFilters] = React.useState(defaultFilters);

  const { refetch: refetchAllCars, data: allCarsData, error: getAllCarsError, isLoading: isCarsLoading } = useGetAllCarsQuery(filters)
  const [addCar, { isLoading: isAddCarLoading } ] = useAddCarMutation()
  const [editCar, { isLoading: isEditCarLoading } ] = useEditCarMutation()
  const [deleteCar] = useDeleteCarMutation()

  const [addNewCarModalVisible, setAddNewCarModalVisible] = React.useState<boolean>(false);
  const [editCarModalVisible, setEditCarModalVisible] = React.useState<Car | null>(null);
  const [deleteCarModalVisible, setDeleteCarModalVisible] = React.useState<Car | null>(null);


  const [isFilterBarVisible, setIsFilterBarVisible] = React.useState<boolean>(true);

  const setCarFilter = (value: any) => {
    setFilters((prev: any) => ({ ...prev, 'filter': { ...prev.filters, ...value } }));
  }
  const setCarSort = (value: any) => {
    setFilters((prev: any) => ({ ...prev, 'sort': value }));
  }

  const handleAddNewCar = () => {
    setAddNewCarModalVisible(true);
  }
  const showEditModal = (id: string) => {

    // @ts-ignore
    const {createdAt, updatedAt, ...rest}: Car = allCarsData.cars.find((item:Car) => item.id === id);
    setEditCarModalVisible(rest);
  }
  const showRemoveModal = (id: string) => {
    // @ts-ignore
    const car: Car = allCarsData?.cars.find((item:Car) => item.id === id);
    setDeleteCarModalVisible(car);
  }
  const onDeleteCarModalClose = () => {
    setDeleteCarModalVisible(null);
  }

  const renderCars = () => {
    if (isCarsLoading) {
      return <CircularProgress />
    };
    if (!allCarsData?.cars || !allCarsData.cars.length) {
      return (
          <>
            <Typography>No cars available
              <Button  onClick={handleAddNewCar} variant='outlined'>add new car</Button>
            </Typography>
          </>
      );
    }
    // @ts-ignore
    return allCarsData.cars.map((item:Car) => <CarItem {...item } onEdit={showEditModal} onDelete={showRemoveModal} key={item.id} />)
  }

  const onAddCarModalClose = () => {
    setAddNewCarModalVisible(false);
  }
  const onAddCarModalSubmit = async (values: Car) => {
    const input = { ...values, price: Number(values.price), year: Number(values.year) };
    const result = await addCar(input);

    if (('error' in result)) {
      errorNotification('Error while adding the car');
    } else {
      successNotification('Car was added successfully');
    }
    onAddCarModalClose();
    refetchAllCars();
  }

  const onEditCarModalClose = () => {
    setEditCarModalVisible(null);
  }
  const onEditCarModalSubmit = async (values: Car) => {
    const {id , ...input} = { ...values, price: Number(values.price), year: Number(values.year) };
    const result = await editCar({id, input});

    if (('error' in result)) {
      errorNotification('Error while editing the car');
    } else {
      successNotification('Car was edited successfully');
    }
    onEditCarModalClose();
    refetchAllCars();
  }

  const onDeleteCarModalSubmit = async () => {
    // @ts-ignore
    const result = await deleteCar(deleteCarModalVisible?.id);
    if (('error' in result)) {
      errorNotification('Error while deleting the car');
    } else {
      successNotification('Car was deleted successfully.');
    }
    onDeleteCarModalClose();
    refetchAllCars();
  }

  const toggleFilterBar = () => {
    setIsFilterBarVisible((prev) => !prev);
    setCarFilter(defaultFilters);
  }

  const itemsCount = (allCarsData: any) => {
    if (!allCarsData?.cars.length) {
      return '0 items';
    }
    const count = allCarsData.cars?.length;
    return `(${count} item${count === 1 ? '' : 's'})`;
  }

  return (
    <Container maxWidth='lg'>
      <Box>
        <Box height={20} />
        <Box sx={styles.header}>
          <Typography component='p'>Cars list {itemsCount(allCarsData)}</Typography>
          <Tooltip title='Add car'>
            <Button sx={styles.addButton} onClick={handleAddNewCar} variant='outlined'>Add</Button>
          </Tooltip>
          <Tooltip title={`${isFilterBarVisible ? 'Close' : 'Show'} filters`}>
            <Button sx={styles.addButton} onClick={toggleFilterBar} variant='outlined'>{isFilterBarVisible ? <CloseIcon /> : <FilterAltIcon /> } </Button>
          </Tooltip>
        </Box>
        <Box height={20} />
        {isFilterBarVisible && <CarFilters { ...{ models: allCarsData?.models, filters, setCarFilter, setCarSort }} />}
        {renderCars()}
        {addNewCarModalVisible && (
            <CarModal
                onClose={onAddCarModalClose}
                onSubmit={onAddCarModalSubmit}
                title='Add new car'
                load={isAddCarLoading}
            />
        )}
        {editCarModalVisible && (
            <CarModal
                onClose={onEditCarModalClose}
                onSubmit={onEditCarModalSubmit}
                title='Edit car'
                initValues={editCarModalVisible}
                load={isEditCarLoading}
            />
        )}
        {deleteCarModalVisible && (
            <Modal
                title='Deleting car'
                body={`Are you really want to delete car with model ${deleteCarModalVisible.model} from ${deleteCarModalVisible.country}?`}
                onClose={onDeleteCarModalClose}
                onSubmit={onDeleteCarModalSubmit}
            />
        )}
      </Box>
    </Container>
)
}

export default CarsPage;
