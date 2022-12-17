import React from 'react'
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from '@mui/material'
import {styles} from './styles';

type IProps = {
    models?: string[],
    filters: { filter: { [p: string]: string }, sort: string }
    setCarFilter: (prevValue: any) => void,
    setCarSort: (prevValue: any) => void
}

const CarFilters: React.FC<IProps> = ({ models, filters, setCarSort, setCarFilter }) =>{

    const handleFilterChange = (type: string) => (event: SelectChangeEvent) => {
        setCarFilter({ [type]: event.target.value as string});
    };
    const handleSortChange = (event: SelectChangeEvent) => {
        setCarSort(event.target.value as string);
    };

    return (
        <Box sx={styles.container}>

            <FormControl fullWidth size="small" sx={styles.input}>
                <InputLabel id="select-model-label">Model</InputLabel>
                <Select
                    labelId="select-model-label"
                    id="select-model"
                    value={filters.filter['model']}
                    label="Model"
                    onChange={handleFilterChange('model')}
                >
                    <MenuItem value={''}>-</MenuItem>
                    {models?.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl fullWidth size="small" sx={styles.input}>
                <Select
                    labelId="select-price-label"
                    id="select-price"
                    value={filters.sort}
                    onChange={handleSortChange}
                >
                    <MenuItem value='price_DESC'>Price high to low </MenuItem>
                    <MenuItem value='price_ASC'>Price low to high</MenuItem>
                    <MenuItem value='year_ASC'>Year older to newer</MenuItem>
                    <MenuItem value='year_DESC'>Year newer to older</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default CarFilters;
