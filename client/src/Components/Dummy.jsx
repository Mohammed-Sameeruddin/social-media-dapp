import React from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions'
//import { IconButton } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
//import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '36.25%', // 16:9
      },
    }));

const Dummy = () => {
    const classes = useStyles();
    return (
        <>
        <Card >
            <CardHeader
            avatar = {
            <Avatar  src="https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg" ></Avatar> 
            } 
            title = "This is Dummy Post"
            subheader = "This message appears when you are not connected to Blockchain"
            
            />
            <CardMedia 
            className = {classes.media}
            image="https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg"
            />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                This is Blockchain based application, in order to use this application u need to connect with the ethereum network.
            </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title="LIKE">
                {/* <IconButton >
                    <ThumbUpIcon />
                </IconButton> */}
            
                      <Button variant="outlined" startIcon={<ThumbUpIcon />} color="primary" >256
      </Button>
                 </Tooltip>
                {/*<Tooltip title="dislike">
                <IconButton>
                    <ThumbDownIcon />
                </IconButton>
                    </Tooltip> */}
                <Tooltip title="COMMENT">
                {/* <IconButton>
                <InsertCommentIcon />
                </IconButton> */}
            <Button variant="outlined" startIcon={<InsertCommentIcon />} color="success">55
      </Button>
                    </Tooltip>
                <Tooltip title="REPORT">
                {/* <IconButton>
                <ReportProblemIcon />
                </IconButton> */}
            <Button variant="outlined" startIcon={<ReportProblemIcon />} color="secondary">10
      </Button>
                    </Tooltip>

            </CardActions>
        </Card>
        </>
    );
}

export default Dummy;