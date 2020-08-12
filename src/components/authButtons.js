import React from 'react';
import Button from '@material-ui/core/Button';
import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () =>{
    const { loginWithRedirect } = useAuth0()
    return (
        <Button
      onClick={() => loginWithRedirect()}
      id="loginButton"
    >
      Login
    </Button>
    )
};

export const LogoutButton = () => {
    const { logout } = useAuth0()
    return (
        <Button
      onClick={() => logout()}
      id="loginButton"
    >
      logout
    </Button>
    )
};

export const CreateAccountButton = () => {
    const { loginWithRedirect } = useAuth0()
    return (
        <Button onClick={()=>loginWithRedirect()} id="createButton">
				Create an Account!
      </Button>
    )
};