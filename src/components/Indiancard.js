import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/Teamslice';
import { Checkbox } from '@mui/material';
import { Button } from '@mui/material';


const Indiancard = (props) => {
  const { player } = props;
  const { img2, name, specialist } = player;

  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const addPlayer = () => {
    if (isChecked) {
      dispatch(addItem(player));
    }
  };

  return (
    <div className='india-card'>
      <img src={img2} />
      <h2>{name}</h2>
      <h2>{specialist}</h2>
      <Checkbox
        checked={isChecked}
        onChange={toggleCheckbox}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Button onClick={addPlayer} variant="contained">
        Add
      </Button>
    </div>
  );
};

export default Indiancard;
