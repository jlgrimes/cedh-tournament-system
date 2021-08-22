import React, { useState } from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';

import { TournamentInformation, AddPlayers } from '../StartTournament';

const StartTournament = () => {
  const [activeStep, setActiveStep] = useState(0);

  const TOURNAMENT_SETUP_STEPS = [
    {
      label: 'Tournament Information',
      component: <TournamentInformation nextStep={() => setActiveStep(activeStep + 1)} />
    },
    {
      label: 'Add Players',
      component: <AddPlayers />
    }
  ];

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {TOURNAMENT_SETUP_STEPS.map((step, i) => (
          <Step key={i}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {TOURNAMENT_SETUP_STEPS[activeStep].component}
    </div>
  )
};

export default StartTournament;