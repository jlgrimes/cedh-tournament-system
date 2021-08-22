import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import { Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 16
  }
}));

const Pairings = () => {
  const classes = useStyles();

  const pairings = useSelector((state) => state.tournament.pairings);
  const currentRound = useSelector((state) => state.tournament.round);

  return (
    <Grid container spacing={2}>
      {pairings[currentRound].map((pairing) => (
        <Grid item>
          <Paper className={classes.paper}>
            {pairing.map((player) => (
              <div>
                {player.name}
              </div>
            ))}
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
};

export default Pairings;