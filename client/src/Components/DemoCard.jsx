import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
import SampleAbi from '../abis/SampleAbi';
import Web3 from 'web3';
import {useEffect,useState} from 'react';
import Dummy from './Dummy';




const useStyles = makeStyles((theme) => ({
    root:{
        background: "white",
        color: "black",
        //marginLeft: 100,
        //marginRight: 100,
        //marginTop: 20,
        marginBottom: 20,
        borderRadius: 20,
        
    },
    media: {
        height: 0,
        paddingTop: '36.25%', // 16:9
      },
    container: {
       // background: "black",
        //padding: 30,
        borderRadius: 10,
    },
    button: {
        marginBottom: '20px',
    },
    link: {
        textDecoration: 'none',
        
    },
    text: {
        color: "#B22222",
    }
}))

let web3 = new Web3(Web3.givenProvider || "ws://localhost:7545"); // localhost 
const contractAddress = '0x7712aF5B71cef31f6e496C94a9Cbb5A35c6F3cC9'
const simpleContract = new web3.eth.Contract(SampleAbi, contractAddress); // smart contract




  


const DemoCard = () => {


    const [acc,setAcc] = useState("");
    const [sample,setSample] = useState([{
        "sender":"",
        "id":"",
        "description":"",
        "imgHash":""
      }])
    
    const classes = useStyles();
    

    useEffect(()=>{
        async function fetchAcc() {
          let accounts = await web3.eth.getAccounts();
          setAcc(accounts[0]);
          const count = await simpleContract.methods.taskCount().call();
          for(let i=1;i<=count;i++){
            const item1 = await simpleContract.methods.tasks(i).call();
             setSample((oldList)=>{
                 return [...oldList,{sender:item1.owner,id:item1.id,description: item1.content,imgHash: item1.imgHash}];
            });
          }
        }
        fetchAcc();
      },[])

      const likeButton = (index) =>{
          console.log("I liked The post of index " + index);
      }

    return(
        <>
        
        <Container className={classes.container}>
        {/* <a className= {classes.link} href='/post'>
                    <Button className={classes.button} variant="outlined" color="secondary">
                        Click Here To Post A Message
                    </Button>
                    </a> */}
        <Typography className={classes.text} variant="h5">
           <strong>Hi,</strong> {acc}
        </Typography>
        <br></br>

        { acc === undefined?
        <div>
        <h5>Oops!! you are not on the Blockchain network</h5>
        <Dummy />
        </div>
        :null}

        { sample.slice(0).reverse().map((currData,index) =>  { 
            if(currData.id === ""){
                return(
                    null
                );
            }
             return (  
        <Card className={classes.root} key={index}>
            <CardHeader
            avatar = {
            <Avatar  src={`https://ipfs.infura.io/ipfs/${currData.imgHash}`} ></Avatar> 
            } 
            title = {currData.sender}
            
            />
            <CardMedia 
            className={classes.media}
            image={`https://ipfs.infura.io/ipfs/${currData.imgHash}`}
            />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {currData.description}
            </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title="LIKE">
                {/* <IconButton >
                    <ThumbUpIcon />
                </IconButton> */}
            
                      <Button variant="outlined" startIcon={<ThumbUpIcon />} color="primary" onClick={likeButton}>256
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
        );})}
        </Container>
        </>
    );
}

export default DemoCard;