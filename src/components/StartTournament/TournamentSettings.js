import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import { updateTournamentMetadata } from '../../pages/Tournament/tournamentSlice';

const TournamentSettings = () => {
  const dispatch = useDispatch();
  const [tempData, setTempData] = useState({});

  return (
    <div>
      <form onSubmit={() => {
        dispatch(updateTournamentMetadata(tempData))
      }}>
        <TextField onChange={(e) => setTempData({...tempData, name: e.target.value})} label="Tournament Name" variant="outlined" required />
        <TextField onChange={(e) => setTempData({...tempData, numRounds: e.target.value})} label="Number of Rounds" variant="outlined" type='number' required />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
};

export default TournamentSettings;