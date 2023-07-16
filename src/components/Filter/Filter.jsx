import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice/filterSlice';
import { MdPersonSearch } from 'react-icons/md';
import { TextField } from '@mui/material';

// STYLES============================================
import { FilterComponent } from './StyledFilter';
// ==================================================

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = e => {
    const filterText = e.target.value;
    dispatch(filter(filterText));
  };

  return (
    <FilterComponent>
      <TextField
        size="small"
        id="outlined-basic"
        label={<MdPersonSearch />}
        placeholder="Name for search"
        variant="outlined"
        type="text"
        onChange={handleChange}
      />
    </FilterComponent>
  );
}
