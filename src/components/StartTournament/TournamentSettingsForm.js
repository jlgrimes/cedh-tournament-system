import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import { updateTournamentMetadata } from '../../pages/Tournament/tournamentSlice';

import './tournament-settings-form.scss';

const TournamentSettingsForm = ({ onComplete }) => {
  const dispatch = useDispatch();
  const { name, numRounds } = useSelector((state) => state.tournament.metadata);

  const [tempData, setTempData] = useState({ name, numRounds });

  return (
    <div className="tournament-settings">
      <form className="tournament-settings__form" onSubmit={(e) => {
        e.preventDefault();
        dispatch(updateTournamentMetadata(tempData))
        onComplete();
      }}>
        <div className="tournament-settings__input">
          <TextField value={tempData.name} onChange={(e) => setTempData({ ...tempData, name: e.target.value })} label="Tournament Name" variant="outlined" required />
        </div>
        <div className="tournament-settings__input">
        <TextField inputProps={{min: 1}} value={tempData.numRounds} onChange={(e) => setTempData({ ...tempData, numRounds: parseInt(e.target.value) })} label="Number of Rounds" variant="outlined" type='number' required />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
};

export default TournamentSettingsForm;