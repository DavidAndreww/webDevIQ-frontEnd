import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		minHeight: 182,
		margin: 40,
		backgroundColor: '#e0fbfc'
	},
	title: {
		fontSize: 14,
	},
	actions: {
		display: 'flex',
		justifyContent: 'flex-end'
	}
});

const Dashboard = () => {
	const classes = useStyles();


	return (
		<div className='dashRoot'>
			<div id='welcomeUser'>
				Welcome, username
		</div>
			<div className='userCards'>
				<Card className={classes.root}>
					<CardContent>
						<div id='scoreCard'>
							<div className='cardTitle'>DevIQ Scorecard</div>
							<div id='scoreNum'>67.8%</div>
							<p>This is your score based on your correct answers. Practice more to raise your score.</p>
						</div>
					</CardContent>
					<CardActions className={classes.actions}>
						<Button variant="contained" id='practiceButton'>Practice More!</Button>
					</CardActions>
				</Card>
				<Card className={classes.root}>
					<CardContent>
						<div className='cardTitle'>Question Options</div>
						<div id='questOptCard'>
							<div id='questOptCardLeft'>
								<p>Turn on or off topics you would like to appear in your questions.</p>
								<CardActions className={classes.actions}><p>Have suggesions on topics or questions?</p>
									<Button variant="contained" id='practiceButton'>Click here</Button>
								</CardActions>

							</div>
							<div id='questOptCardRight'>
								<div id='optionsList'>
									
								</div>
							</div>
						</div>
					</CardContent>

				</Card>
			</div>
		</div>
	)

}


export default Dashboard