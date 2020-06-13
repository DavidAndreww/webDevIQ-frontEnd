import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormDialog from '../components/submission'


const useStyles = makeStyles({
	root: {
		minWidth: 275,
		minHeight: 182,
		margin: 40,
		backgroundColor: '#e0fbfc'
	},
	root2: {
		marginTop: 20,
		minWidth: 225,
		minHeight: 225,
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
	const [state, setState] = React.useState({
		javaScript: true,
		react: true,
		node: true,
		angular: true
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};


	return (
		<div className='dashRoot'>
			<div id='welcomeUser'>
				Welcome, username.
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
								<CardActions className={classes.actions}>
									<div id='suggestionsButtonArea'>
									Have suggesions on topics or questions?
									<FormDialog/>
									</div>
								</CardActions>

							</div>
							<div id='questOptCardRight'>
								<div className='optionsList'>
									JavaScript
									<Switch
										checked={state.javaScript}
										onChange={handleChange}
										color="primary"
										name="javaScript"
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
								</div>
								<div className='optionsList'>
									React
									<Switch
										checked={state.react}
										onChange={handleChange}
										color="primary"
										name="react"
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
								</div>
								<div className='optionsList'>
									Node.JS
									<Switch
										checked={state.node}
										onChange={handleChange}
										color="primary"
										name="node"
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
								</div>
								<div className='optionsList'>
									Angular
									<Switch
										checked={state.angular}
										onChange={handleChange}
										color="primary"
										name="angular"
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
								</div>
							</div>
						</div>

					</CardContent>

				</Card>
			</div>

			<div id='suggestionCardHeading'>
				Suggested for you.
			</div>
			<div id='articleContainer'>
				<Card className={classes.root2}>
					<div className='articleCardTitle'>Inheritance</div>
				</Card>

				<Card className={classes.root2}>					<div className='articleCardTitle'>Filter Method</div>
				</Card>

				<Card className={classes.root2}>
					<div className='articleCardContainer'>
										<div className='articleCardTitle'>Functional programming</div>
				<Button>Go to article</Button>
				</div>
				</Card>

			</div>
			<div id='weAreDesperate'>
				As many old and new developers know, projects like these take time and money for us to provide them as a service. If you find this site useful or just want to support us in our journey through the development world, please consider donating.
				<div>
					<Button variant='contained' id='donateButton'>Donate!</Button>
					</div> 
			</div>
		</div>
	)

}


export default Dashboard