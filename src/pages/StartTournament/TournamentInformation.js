import React from 'react';
import { TournamentSettings } from '../../components/StartTournament';

const TournamentInformation = ({ nextStep }) => {
  return (
    <TournamentSettings nextStep={nextStep} />
  );
};

export default TournamentInformation;