import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));
const useStylesTypography = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function GlobalData() {
  const classes = useStyles();
  const classTypography = useStylesTypography();
  
  const [globalData, setGlobalData] = useState();

  useEffect( ()=> {
     async function fetchGlobalData(){
       const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
       console.log(apiResponse);
       const dataFromAPI = await apiResponse.json();
       console.log(dataFromAPI);
       setGlobalData(dataFromAPI);
     }

     fetchGlobalData();
  },[])

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
      <div className={classTypography.root}>
      <Typography variant="h4" gutterBottom style={{color:'grey'}}>
      {globalData && globalData.results && globalData.results[0].total_cases}
      </Typography> 
      <Typography variant="subtitle2" gutterBottom style={{color:'grey', fontWeight:'bold'}}>
        Global Data as of Today
      </Typography>
      </div>
        </Paper>
        <Paper elevation={3}>
        <div className={classTypography.root}>
      <Typography variant="h4" gutterBottom style={{color:'red'}}>
      1000
      </Typography> 
      <Typography variant="body1" gutterBottom style={{color:'red', fontWeight:'bold'}}>
        Active
      </Typography>
      </div>
        </Paper>
        <Paper elevation={3}>
        <div className={classTypography.root}>
      <Typography variant="h4" gutterBottom style={{color:'orange'}}>
      1000
      </Typography> 
      <Typography variant="body1" gutterBottom style={{color:'orange', fontWeight:'bold'}}>
      Recovered
      </Typography>
      </div>
        </Paper>
        <Paper elevation={3}>
        <div className={classTypography.root}>
      <Typography variant="h4" gutterBottom style={{color:'green'}}>
      1000
      </Typography> 
      <Typography variant="body1" gutterBottom style={{color:'green', fontWeight:'bold'}}>
      Fatalities
      </Typography>
      </div>
        
        </Paper>
    </div>
  );
}