import React, { useState, useEffect } from 'react';
import socket from '../ioClient';
import { useSelector } from 'react-redux';
import { Button, Card, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ReactPlayer from 'react-player'

const useStyles = makeStyles({
	queueDisplay: {
		width: '40%',
		marginLeft: '1rem'
	},
	audioContainer: {
		display: "flex",
		justifyContent: "center", 
		visibility: 'hidden'
	},
	audioItem: {
		display: "flex",
		justifyContent: "center", 
		height: '20px'
	},
	playBtn: {
		margin: '1rem 0 0 1rem',
		backgroundColor: "#21b7a8",
		color: "#FFF"
	}

})

const AddQueue = ({nextImg, nextTitle}) => {
const css = useStyles()
const tracks =  useSelector(state => state.tracks.currentTrack.audioArr)
const [queue, setQueue] = useState([])


const handleSource = () => {
	nextImg()
	nextTitle()
  socket.emit("audiosTrack", tracks)
}

useEffect(() => {
	socket.on("audiosPlayQueue", (audiosQueue) => {
		audiosQueue.concat(tracks)
		setQueue(audiosQueue)
	})
}, [queue])

return (
	<>
		<Card className={css.audioContainer} >
			<CardMedia className={css.audioItem} >
				<ReactPlayer 
					url={`https://www.youtube.com/watch?v=${queue}`} 
					playing={true}
				/>
			</CardMedia>
		</Card>
		<Button className={css.playBtn} onClick={handleSource}>Play Next Song</Button>
	</>
	);
};

export default AddQueue;