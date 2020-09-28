import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, Grid } from '@material-ui/core';



const useStyles = makeStyles({
	root: {
		display: "flex",
		width: '100%', 
		height: '80px', 
		backgroundColor: "#03071A"
	}, 
	tracks: {
		display: 'flex', 
	},
	content: {
		display: 'flex', 
		flexDirection: 'column', 
	},
	chatContainer: {
		display: 'flex',
		width: "100%",
		height: '30px',
		marginTop: '1rem',
		backgroundColor: "blue"
	},
	chat: {
		display: 'flex',
		flexDirection: 'flex-end',
	}
})


const Queue = () => {

const css = useStyles()
	return (
		<>  
			<div className={css.root} >
				<Grid  direction="row">
					<Card className={css.tracks}>
					</Card>
				</Grid>
			</div>
		</>
	);
};

export default Queue;
