import React, { useState, useEffect } from 'react';
import { makeStyles,   Grid, Typography  } from '@material-ui/core';
import SearchMusic from './SearchMusic';
import { useSelector } from 'react-redux';
import AddQueue from './AddQueue';
import socket from '../ioClient';


const useTheme = makeStyles((theme) => ({
  root: {
    color: "white",
    fontWeight: "bold",
    marginTop: "1rem",
    [theme.breakpoints.down('sm')]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down('xs')]: {        
      margin: "0 0 1rem 1rem",
    }
  },
}));

const useStyles = makeStyles({
  root: {
    width: '100%',  
    background: 'linear-gradient(#2F50A1, #111E3E)', 
    margin: '0px !important',
    padding: '0px important!', 
    overflow: 'hidden', 
  },
  footer: {
    width: '100%',  
    backgroundColor: "blue",
    height: '80px',
  },
  audio: {
    display: 'flex',
    justifyContent: 'center'
  },
  imgBox: {
    width:' 30%',
    margin: "1rem"
  }

})
  
const TrackCoverDisplay = () => {

const imgTrack = useSelector(state => state.tracks.currentTrack.tracksArr)
const titleTrack  = useSelector(state => state.tracks.currentTrack.titleArr)
const css = useStyles();
const test = useTheme()
const [imgQueue, setImgQueue] = useState([])
const [titleQueue, setTitleQueue] = useState([])

const handleImg = () => {
  socket.emit("imagesTrack", imgTrack)
}
const handleTitle = () => {
  socket.emit("titlesTrack", titleTrack)
}

useEffect(() => {
  socket.on('imagesPlayQueue', (imagesQueue) => {
    imagesQueue.concat(imgTrack)
    setImgQueue(imagesQueue)
  })
  socket.on('titlesPlayQueue', (titlesQueue) => {
    titlesQueue.concat(titleTrack)
    setTitleQueue(titlesQueue)
  })
},[imgQueue])


return (
  <>
    <div className={css.root}>
      <Grid container>
        <Grid className={css.imgBox} item xs={12} sm={6} lg={4}>
          <img  src={ `${imgQueue}`}/>  
        </Grid>  
        <Grid item xs={12} sm={4}  md={4} lg={6} >
          <Typography className={test.root} variant="h4">  {titleQueue}</Typography>
        </Grid> 
      </Grid>
    </div>
    <AddQueue  nextImg={handleImg} nextTitle={handleTitle}/>
    <SearchMusic/>
  </>
  )
};

export default TrackCoverDisplay;
