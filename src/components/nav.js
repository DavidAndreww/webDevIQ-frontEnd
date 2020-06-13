import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormDialog from '../components/login'
import { MdAccountBox } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { GrContact, GrInfo } from "react-icons/gr";
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#293241',
    height: 35,
    color: "#e0fbfc",
    fontFamily: "'Inconsolata', monospace",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#ee6c4d',
  },
  title: {
    flexGrow: 1,
    fontFamily: "'Inconsolata', monospace",
    fontSize: 45,
    color: "#ee6c4d",

  },
}));

export default function ButtonAppBar() {
  const [state, setState] = React.useState({
    right: false,
  });
  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to='/account/username' className='drawerLink'>
      <ListItem button>
          <ListItemIcon>
            <MdAccountBox className='menuIcon' />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
        </Link>
        <Link to='/profile' className='drawerLink'>
        <ListItem button>
          <ListItemIcon>
            <RiProfileLine className='menuIcon' />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        </Link>
        <Link to='/dashboard' className='drawerLink'>
        <ListItem button>
          <ListItemIcon>
            <GoGraph className='menuIcon' />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
      <ListItem button>
          <ListItemIcon>
            <GrContact className='menuIcon' />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GrInfo className='menuIcon' />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <img src='https://i.imgur.com/xv6hPO8.png'id='logo'></img> 
          <Typography variant="h6" className={classes.title}>
           DevIQ 
          </Typography>
          <Button id='loginButton'><FormDialog/></Button>
          <div>
            {['right'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                </Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}