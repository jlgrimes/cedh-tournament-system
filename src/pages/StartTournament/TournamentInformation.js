import React from 'react';
import { TournamentSettingsForm } from '../../components/StartTournament';

const TournamentInformation = ({ nextStep }) => {
  return (
    <TournamentSettingsForm onComplete={nextStep} />
  );
};

export default TournamentInformation;