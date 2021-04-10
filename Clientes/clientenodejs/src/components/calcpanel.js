import  {React, useState, useEffect } from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import GrillaSimbolos from "./grillaSimbolos";
import { TextField } from '@material-ui/core';
import socket from "./socket";


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

export default function CalcPanel() {
     const classes = useStyles();
     const [resultado, setResultado] = useState("");
     const [calculo, setCalculo] = useState("");

     useEffect(() => {
        socket.on('respuestacalculo', (data) => {
            setResultado(data);
            console.log('Received: ' + data);
        });

        return () => {socket.off()}

     },[resultado]);


    function onInputClickButton(val){
        setCalculo(calculo + val);
    };

    function sendCalculation () {
        console.log(calculo);
        socket.emit("requestcalculo", calculo);
    };

    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12}>
                    <TextField  value={calculo}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField  value={resultado}></TextField>
                </Grid>
            </Grid>
            <Grid xs={4}>
                <GrillaSimbolos onButtonClick={onInputClickButton}></GrillaSimbolos>
            </Grid>
            <Grid container >
                <Button onClick={()=> sendCalculation()}>Enviar</Button> 
                <Button onClick={()=> {setCalculo(""); setResultado("");}}>Limpiar</Button> 
            </Grid>
        </div>
    )

}