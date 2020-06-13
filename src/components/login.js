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
			<Button onClick={handleClickOpen} id="loginButton">
				Login
      </Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Sign in.</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Sign in to your existing account.
          </DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="username"
						label="Username"
						type="username"
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
						Submit
          </Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}