import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import Countup from 'react-countup';
import styles from './Cards.module.css'

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate}}) => {
    console.log(confirmed)
    if(!confirmed){
        return 'Loading...';
    }
    return(
        <div className = {styles.container}>
        <Grid container spacing = {3} justify = 'center'>
            <Grid item component = {Card}>
            <CardContent>
            <Typography color = "textSecondary" gutterBottom>Infected</Typography>
            <Typography varient="h5">{confirmed.value}</Typography>
            <Typography colr="textSecondary">Real Date</Typography>
            <Typography variant = "body2">Number of Active Cases of Covid-19</Typography>
            </CardContent>
            </Grid>
            <Grid item component = {Card}>
            <CardContent>
            <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
            <Typography varient="h5">Real Data</Typography>
            <Typography colr="textSecondary">Real Date</Typography>
            <Typography variant = "body2">Number of Recovered Cases from Covid-19</Typography>
            </CardContent>
            </Grid>
            <Grid item component = {Card}>
            <CardContent>
            <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
            <Typography varient="h5">Real Data</Typography>
            <Typography colr="textSecondary">Real Date</Typography>
            <Typography variant = "body2">Number of Deaths caused by Covid-19</Typography>
            </CardContent>
            </Grid>
        </Grid>
        
        </div>
    )
}

export default Cards;