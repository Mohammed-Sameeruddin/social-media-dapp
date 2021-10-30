import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText,Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const useStyles = makeStyles((theme)=> ({
    root: {
        background: "",
        
    },
    avatar : {
        background: "red",
        color: "white",
    },
    button: {
      marginBottom: '10px',
      width:"220px",
  },
  link: {
      textDecoration: 'none',
      
  },
  head: {
    color: 'tomato',
    marginLeft: '20px',
  },
  hr: {
    marginLeft:"20px",
    marginRight:"20px",
  },
  paper:{
    justifyItems:"center",
    justifyContent:"center",
    marginRight:"200px"
  },
  peer: {
    marginTop:"60px"
  }
}))

const Side = () => {
    const classes = useStyles();
    return(
        <>
        <Paper className={classes.peer}>
  <Typography variant="h6">
           <strong className={classes.head}> Peers on Network </strong>
            </Typography>
            <hr ></hr>
        <List className={classes.root}>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar className={classes.avatar}>
            ox
          </Avatar>
        </ListItemAvatar> */}
        <PersonPinIcon  color="error" />
        <ListItemText primary="0x41f5aaa2bf1f25e5337C9098f4A52b37bE009cdB"  />
      </ListItem>
      <hr className={classes.hr}></hr>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar className={classes.avatar}>
            ox
          </Avatar>
        </ListItemAvatar> */}
        <PersonPinIcon  color="error" />
        <ListItemText primary="0x74C35D6dc588F157B0F0cac8c89dc8E98D764AFD" />
      </ListItem>
      <hr className={classes.hr}></hr>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar className={classes.avatar}>
            ox
          </Avatar>
        </ListItemAvatar> */}
        <PersonPinIcon  color="error" />
        <ListItemText primary="0x240e2299750c790F0Be4D66496d6c407C3691D4e" />
      </ListItem>
      <hr className={classes.hr}></hr>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar className={classes.avatar}>
            ox
          </Avatar>
        </ListItemAvatar> */}
        <PersonPinIcon  color="error" />
        <ListItemText primary="0x9C3F8390f0cC5decE54776a5c4F3a87546062a8E" />
      </ListItem>
      <hr className={classes.hr}></hr>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar className={classes.avatar}>
            ox
          </Avatar>
        </ListItemAvatar> */}
        <PersonPinIcon  color="error" />
        <ListItemText primary="0x02414779A6bC2c40daA7BCdC2893Ef216390d88B" />
      </ListItem>
      <hr className={classes.hr}></hr>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar className={classes.avatar}>
            ox
          </Avatar>
        </ListItemAvatar> */}
        <PersonPinIcon  color="error" />
        <ListItemText primary="0x69686CC59f3DACC015E7A35D74AaC6DeF3329FF0" />
      </ListItem>
      <hr className={classes.hr}></hr>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar className={classes.avatar}>
            ox
          </Avatar>
        </ListItemAvatar> */}
        <PersonPinIcon  color="error" />
        <ListItemText primary="0xC26395317b2a84b31Daa41221b215DEc22E5f9B7" />
      </ListItem>
      <hr className={classes.hr}></hr>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar className={classes.avatar}>
            ox
          </Avatar>
        </ListItemAvatar> */}
        <PersonPinIcon  color="error" />
        <ListItemText primary="0xA1c105092691675d68Ccc4917a4638D0Aa8019D7" />
      </ListItem>

      
    </List> 
    </Paper>
    <br></br><br></br>
   <Paper className={classes.paper}>
    <List className={classes.root}>
      <ListItem>
      <a className= {classes.link} href='/post'>
                    <Button className={classes.button} variant="outlined" color="primary">
                      Post Message
                    </Button>
                    </a>
      </ListItem>
      <ListItem>
      <a className= {classes.link} href='/post'>
                    <Button className={classes.button} variant="outlined" color="inherit">
                        View My Profile
                    </Button>
                    </a>
      </ListItem>
      <ListItem>
      <a className= {classes.link} href='/post'>
                    <Button className={classes.button} variant="outlined" color="secondary">
                        Delete Message
                    </Button>
                    </a>
      </ListItem>
      

      <ListItem>
      <a className= {classes.link} href='/post'>
                    <Button className={classes.button} variant="outlined" color="warning">
                        Settings
                    </Button>
                    </a>
      </ListItem>
    </List>
        </Paper>
        </>
    );
}

export default Side;
