import React from 'react';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop:"20px",
        padding: "10px 0px 10px 0px",
        bottom: "0",
        width: "100%",
        
        background: "black",
        color:"white",
        textAlign:"center",

    },
}));

const Footer = () => {
    const classes = useStyles();
    return(
        <>
        <div className={classes.footer}>
            <h6>Social Media Application using Blockchain @ImagineHack 2021</h6>
        </div>
        </>
    );
}

export default Footer;
