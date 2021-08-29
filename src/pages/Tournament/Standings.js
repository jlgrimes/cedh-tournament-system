import React from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { getTotalPoints, getStandings, getResistance } from '../../utils/pairing';
import { startFinalRound } from './tournamentSlice';

const StartFinalRoundButton = () => {
  const dispatch = useDispatch();

  return (
    <Button 
      variant="contained"
      color="primary"
      onClick={() => dispatch(startFinalRound())}
    >
      Enter
    </Button>
  );
};

const CongratsToWinner = ({ winner }) => {
  return (
    <div>
      Congratulations to {winner.name} for winning!
    </div>
  );
};

const Standings = ({ endOfTournament }) => {
  const players = useSelector((state) => state.tournament.players)
  const standings = getStandings(players);

  return (
    <div>
      {endOfTournament && <CongratsToWinner winner={standings[0]} />}
      <List>
        {standings.map((player) => (
          <ListItem>
            <ListItemText>
              {`${player.name} - ${getTotalPoints(player)} points`}
            </ListItemText>
            {
              !endOfTournament && (
                <ListItemText>
                  {`${getTotalPoints(player)} points, opponent resistance = ${getResistance(player)}`}
                </ListItemText>
              )
            }
          </ListItem>
        ))}
      </List>
      {!endOfTournament && <StartFinalRoundButton />}
    </div>
  )
};

export default Standings;