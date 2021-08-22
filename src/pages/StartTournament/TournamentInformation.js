import React from 'react';
import { TournamentSettingsForm } from '../../components/StartTournament';

const TournamentInformation = ({ nextStep }) => {
  return (
    <TournamentSettingsForm nextStep={nextStep} />
  );
};

export default TournamentInformation;