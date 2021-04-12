import  {React, useState, useEffect } from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import GrillaSimbolos from "./grillaSimbolos";
import { TextField } from '@material-ui/core';
import client from "./socket.js";

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
    //var client =  new WebSocket('ws://localhost:5896');
     const classes = useStyles();
     const [resultado, setResultado] = useState("");
     const [calculo, setCalculo] = useState("");
    
     useEffect(()=> {
        
        client.on("connection", () => {
            console.log('connected')
        });
        // client.onopen = () => {
        //     // on connecting, do nothing but log it to the console
        //     console.log('connected')
        //     }

        // client.onerror = (e) => {
        //     // on connecting, do nothing but log it to the console
        //     console.log(`error in socket connection: ${ JSON.stringify(e)}`)
        // }

        // client.onclose = () => {
        //     // on connecting, do nothing but log it to the console
        //     console.log(`WebSocket Connection closed`)
        // }


    },[]);

     useEffect(() => {
        client.on('data', (data) => {
            setResultado(data);
            console.log('Received: ' + data);
        });
        
        // client.onmessage = evt => {
        //     // listen to data sent from the websocket server
        //     const message = JSON.parse(evt.data)
        //     setResultado( message)
        //     console.log(message)
        // }
    

        // client.on('data', function(data) {
        //     console.log('Received: ' + data);
        //     setResultado(data);
        //     client.destroy(); // kill client after server's response
        // });


     },[resultado]);


    function onInputClickButton(val){
        setCalculo(calculo + val);
    };

    function sendCalculation () {
        console.log(calculo);

        // on connecting, do nothing but log it to the console

        // var keyByte = new Buffer.from(calculo, "ascii");
        // console.log(keyByte);
        // client.binaryType = "arraybuffer";
        // client.send(keyByte)
        client.emit("data", calculo);
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