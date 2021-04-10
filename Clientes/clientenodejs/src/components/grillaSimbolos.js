import  {React, useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

const uno = "1";
const dos = "2";
const tres = "3";
const cuatro = "4";
const cinco = "5";
const seis = "6";
const siete = "7";
const ocho = "8";
const nueve = "9";
const cero = "0";
const mas = "+";
const menos = "-";
const multiplicar = "*";
const dividir = "/";
const potencia = "pot";
const parentesisA = "(";
const parentecisC = ")";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function GrillaSimbolos( { onButtonClick } ){
    const classes = useStyles();
    return (
            <Grid container >
                <Grid container >
                    <Grid item xs={3} >
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(parentesisA)}>{parentesisA}</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(parentecisC)}>{parentecisC}</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(potencia)}>{potencia}</Button>
                        </Paper>
                        
                    </Grid>
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(dividir)}>{dividir}</Button>
                        </Paper>
                    </Grid>
                </Grid>


                <Grid container >
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(uno)}>{uno}</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(dos)}>{dos}</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(tres)}>{tres}</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(multiplicar)}>{multiplicar}</Button>
                        </Paper>
                    </Grid>
                </Grid>


                <Grid container >
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(cuatro)}>{cuatro}</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(cinco)}>{cinco}</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(seis)}>{seis}</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(menos)}>{menos}</Button>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(siete)}>{siete}</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(ocho)}>{ocho}</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(nueve)}>{nueve}</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(mas)}>{mas}</Button>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={3}>
                        <Button></Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper clssName={classes.paper}>
                            <Button fullWidth={true} onClick={() => onButtonClick(cero)}>{cero}</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Button></Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button></Button>
                    </Grid>
                </Grid>

            </Grid>
        
    )

}