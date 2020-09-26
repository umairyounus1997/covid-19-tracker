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
  const [dataLoading, setDataLoading] = useState(false)

  useEffect( ()=> {
     async function fetchGlobalData(){
       setDataLoading(true);
       const apiResponse = await fetch('https://thevirustracker.com/free-api?global=stats');
       console.log(apiResponse);
       const dataFromAPI = await apiResponse.json();
       console.log(dataFromAPI);
       setGlobalData(dataFromAPI);
       setDataLoading(false);
     }

     fetchGlobalData();
  },[])
  
  const loading = "Loading";

if(dataLoading){
  return(
    <div className={classes.root}>
      <Paper elevation={3}>
      <div className={classTypography.root}>
      <Typography variant="h4" gutterBottom style={{color:'grey'}}>
      {loading}
      </Typography> 
      <Typography variant="subtitle2" gutterBottom style={{color:'grey', fontWeight:'bold'}}>
        Global Data as of Today
      </Typography>
      </div>
        </Paper>
        <Paper elevation={3}>
        <div className={classTypography.root}>
      <Typography variant="h4" gutterBottom style={{color:'red'}}>
      {globalData && globalData.results && globalData.results[0].total_active_cases}
      </Typography> 
      <Typography variant="body1" gutterBottom style={{color:'red', fontWeight:'bold'}}>
        Active
      </Typography>
      </div>
        </Paper>
        <Paper elevation={3}>
        <div className={classTypography.root}>
      <Typography variant="h4" gutterBottom style={{color:'orange'}}>
      {globalData && globalData.results && globalData.results[0].total_recovered}
      </Typography> 
      <Typography variant="body1" gutterBottom style={{color:'orange', fontWeight:'bold'}}>
      Recovered
      </Typography>
      </div>
        </Paper>
        <Paper elevation={3}>
        <div className={classTypography.root}>
      <Typography variant="h4" gutterBottom style={{color:'green'}}>
      {globalData && globalData.results && globalData.results[0].total_unresolved}
      </Typography> 
      <Typography variant="body1" gutterBottom style={{color:'green', fontWeight:'bold'}}>
      Fatalities
      </Typography>
      </div>
        
        </Paper>
    </div>
  )
}
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
      {globalData && globalData.results && globalData.results[0].total_active_cases}
      </Typography> 
      <Typography variant="body1" gutterBottom style={{color:'red', fontWeight:'bold'}}>
        Active
      </Typography>
      </div>
        </Paper>
        <Paper elevation={3}>
        <div className={classTypography.root}>
      <Typography variant="h4" gutterBottom style={{color:'orange'}}>
      {globalData && globalData.results && globalData.results[0].total_recovered}
      </Typography> 
      <Typography variant="body1" gutterBottom style={{color:'orange', fontWeight:'bold'}}>
      Recovered
      </Typography>
      </div>
        </Paper>
        <Paper elevation={3}>
        <div className={classTypography.root}>
      <Typography variant="h4" gutterBottom style={{color:'green'}}>
      {globalData && globalData.results && globalData.results[0].total_unresolved}
      </Typography> 
      <Typography variant="body1" gutterBottom style={{color:'green', fontWeight:'bold'}}>
      Fatalities
      </Typography>
      </div>
        
        </Paper>
    </div>
  );
}