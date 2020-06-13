import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button onClick={handleClickOpen} id='practiceButton'>
				Click here
      </Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Submit a Question or Topic</DialogTitle>
				<DialogContent>
					<DialogContentText>
						We love feedback! Let us know if there is a topic you would like to see added, or a question on an exisitng subject that you think may help others study!
          </DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="firstName"
						label="First Name"
						type="name1"
						fullWidth
					/>
					<TextField
						margin="dense"
						id="username"
						label="Username"
						type="username"
						fullWidth
					/>
					<TextField
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
					/>
					<TextField
						id="filled-multiline-static"
						label="Suggestion"
						multiline
						rows={5}
						variant="filled"
						fullWidth
					/>

				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
          </Button>
					<Button onClick={handleClose} id='practiceButton'>
						Submit
          </Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}