import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import { updateTournamentMetadata } from '../../pages/Tournament/tournamentSlice';

const TournamentSettingsForm = ({ onComplete }) => {
  const dispatch = useDispatch();
  const { name, numRounds } = useSelector((state) => state.tournament.metadata);
  console.log(name)

  const [tempData, setTempData] = useState({ name, numRounds });

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(updateTournamentMetadata(tempData))
        onComplete();
      }}>
        <TextField value={tempData.name} onChange={(e) => setTempData({ ...tempData, name: e.target.value })} label="Tournament Name" variant="outlined" required />
        <TextField value={tempData.numRounds} onChange={(e) => setTempData({ ...tempData, numRounds: e.target.value })} label="Number of Rounds" variant="outlined" type='number' required />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
};

export default TournamentSettingsForm;