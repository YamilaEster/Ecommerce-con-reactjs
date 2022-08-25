import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../assets/logo2.png"
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "7rem",
    },
    appBar:{
      backgroundColor: "whitesmoke",
      boxShadow:"none",
    },
    grow:{
      flexGrow: 1,
    },
    button:{
      marginLeft: theme.spacing(2),
  },
    image: {
      marginRight: "10rem",
      height : "1rem",
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} className={classes.image}/>
        </IconButton>
        <div className={classes.grow}/>
        <Typography variant="h6" color= "textPrimary" component="p">
            Hello Guest
        </Typography>
        <div className={classes.button}>
            <Button variant="filled">
            <strong>Sign in</strong >
            </Button>
        <IconButton aria-label="show cart items" color="inherit">
          <Badge badgeContent={2} color="secondary">
          <ShoppingCart fontSize="large" color="primary"/>
          </Badge>
        </IconButton>
        </div>
        </Toolbar>
        </AppBar>
    </div>
    );
}
