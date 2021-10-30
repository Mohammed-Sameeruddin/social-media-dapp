import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=> ({
    root:{
        marginBottom: 80,
        
    },
    brand:{
        marginLeft:"35%",
        color: "Crimson",
        textAlign: "center",
        letterSpacing: 2,
        font: "bold",
    }
}))

const Header = () => {
    const classes = useStyles();
    return(
        <>
        <div class="container" className={classes.root}>
        <nav class="navbar fixed-top navbar-light bg-light" styles={"background-color: #e3f2fd"}>
  <h3 class="navbar-brand" className={classes.brand}><strong>MyDApp</strong></h3>
</nav>
        </div>

        </>
    );
}

export default Header;
