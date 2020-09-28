import React, { useState } from 'react';
import { makeStyles, Typography, Grid, Button, Input } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    background: 'linear-gradient(45deg, #121317 30%, #323B42 90%)',
  }, 
  mainTitle: {
    color: "white", 
    fontWeight: 'bold',
    fontSize: "50px",
    display: "flex", 
    justifyContent: "center"    
  }, 
  join: {
    marginTop: '20px',
    color: "white",
    borderRadius: '50px',
    background: "linear-gradient(#5583EE, #41D8DD)", 
    width: '200px',
    height: '30px', 
  },
  joinInput: {
    color: "white",
    borderBottom: '2px solid white',
    '&:after': {
    borderBottom: '2px solid white',
    },
  }
})


const Join = () => {
const css = useStyles()
const [name, setName] = useState("")
const [room, setRoom] = useState("")

return (
  <Grid className={css.root}  direction="column"  justify="center" alignItems="center">
    <Grid container direction="column"  justify="center"alignItems="center">  
      <Typography className={css.mainTitle}> Audio Chat App</Typography>
      <Input className={css.joinInput}  disableUnderline={true}	placeholder="Username" onChange={(e) => setName(e.target.value)}/>
      <Input className={css.joinInput}  disableUnderline={true}	 placeholder="Room" onChange={(e) => setRoom(e.target.value)}/>
      <Grid  justify="center">
        <Link onClick={(e) => (!name || !room) ? e.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
          <Button className={css.join}>Join</Button>
        </Link>
      </Grid> 
    </Grid>
  </Grid>
  );
};

export default Join;
