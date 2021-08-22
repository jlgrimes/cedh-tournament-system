import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const PlayerImport = ({ addPlayer }) => {
  const [inputVal, setInputVal] = useState('');

  return (
    <div className='player-import'>
      <TextField label="Player" onChange={(e) => setInputVal(e.target.value)} />
      <Button variant="contained" color="primary" onClick={() => addPlayer(inputVal)}>
        Enter
      </Button>
    </div>
  );
}

export default PlayerImport;