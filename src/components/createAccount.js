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
			<Button onClick={handleClickOpen} id="createButton">
				Create an Account!
      </Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Sign Up!</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Sign up for a free account to learn more about the interview process for a web development job.
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
						autoFocus
						margin="dense"
						id="lastName"
						label="Last Name"
						type="name2"
						fullWidth
					/>
					<TextField
						autoFocus
						margin="dense"
						id="username"
						label="Username"
						type="username"
						fullWidth
					/>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
					/>
					<TextField
						id="filled-password-input"
						label="Password"
						type="password"
						margin="dense"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
          </Button>
					<Button onClick={handleClose} color="primary">
						Subscribe
          </Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}