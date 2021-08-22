import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const PlayerImport = ({ addPlayer }) => {
  const [inputVal, setInputVal] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (inputVal === '') {
      setShowError(true);
      return;
    }

    addPlayer(inputVal)
    setInputVal('')
    setShowError(false);
  };

  return (
    <div className='player-import'>
      <TextField
        label="Player"
        onChange={(e) => {
          if (e.target.value !== '') {
            setShowError(false);
          }

          setInputVal(e.target.value)
        }}
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') {
            handleSubmit();
            ev.preventDefault();
          }
        }}
        value={inputVal}
        error={showError}
        helperText={showError && 'Please enter a name for player'}
      />
      <Button variant="contained" color="primary"
          onClick={() => handleSubmit()}>
        Enter
      </Button>
    </div>
  );
}

export default PlayerImport;