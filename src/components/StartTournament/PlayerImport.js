import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const PlayerImport = ({ addPlayer }) => {
  const [inputVal, setInputVal] = useState('');
  const [showError, setShowError] = useState(false);

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
        value={inputVal}
        error={showError}
        helperText={showError && 'Please enter a name for player'}
      />
      <Button variant="contained" color="primary"
          onClick={() => {
          if (inputVal === '') {
            setShowError(true);
            return;
          }

          addPlayer(inputVal)
          setInputVal('')
          setShowError(false);
        }}>
        Enter
      </Button>
    </div>
  );
}

export default PlayerImport;