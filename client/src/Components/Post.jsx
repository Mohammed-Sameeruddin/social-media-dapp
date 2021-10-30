import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import {create} from 'ipfs-http-client';
import SampleAbi from '../abis/SampleAbi';
import Web3 from 'web3';
import {useEffect} from 'react';
import Alert from '@mui/material/Alert';


const ipfs = create({host:"ipfs.infura.io",port:"5001",protocol:"https"});

let web3 = new Web3(Web3.givenProvider || "ws://localhost:7545"); // localhost 
const contractAddress = '0x7712aF5B71cef31f6e496C94a9Cbb5A35c6F3cC9'
const simpleContract = new web3.eth.Contract(SampleAbi, contractAddress); // smart contract





const useStyles = makeStyles((theme)=> ({
    head: {
        textAlign:"center",
        color:"#8B008B",
    },
    text: {
        width: '100%',
        marginTop: '10px',
        border: '1.5px solid #8B008B',
        borderRadius:'5px',
    },
    
}))

const Post = () =>{

  const [flag,setFlag] = useState(false);
  const [desc,setDesc] = useState("");
  const [img,setImg] = useState("");
  // const [ipfsHash,setIpfsHash] = useState("");
  const [acc,setAcc] = useState("");
  // const [sample,setSample] = useState([{
  //   "sender":"",
  //   "id":"",
  //   "description":"",
  //   "imgHash":""
  // }])
  

  useEffect(()=>{
    async function fetchAcc() {
      let accounts = await web3.eth.getAccounts();
      setAcc(accounts[0]);
      // const count = await simpleContract.methods.taskCount().call();
      // for(let i=1;i<=count;i++){
      //   const item1 = await simpleContract.methods.tasks(i).call();
      //    setSample((oldList)=>{
      //        return [...oldList,{sender:item1.owner,id:item1.id,description: item1.content,imgHash: item1.imgHash}]
      //   });
      // }
    }
    fetchAcc();
  },[])

  // const addTask = async (desc,ipfsHash) => {
  //   console.log(desc);
  //   console.log(ipfsHash);
  //   console.log(acc);
  //   await simpleContract.methods.createTask(desc,ipfsHash).send({from:acc});
  // }

  const inputChange = (event) => {
        const value = event.target.value;

        setDesc(value);
  }

  const inputImg = (event) => {
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      setImg(Buffer(reader.result));
    }
  }

  const submitInfo = async (event) => {
    event.preventDefault();
    const file = await ipfs.add({content:img});
    await simpleContract.methods.createTask(desc,file.path).send({from:acc});
    // setIpfsHash(file.path);
    setFlag(true);
    
  }

    const classes = useStyles();
    return(
        <>
        <div class="container">
        <div class="row">
        <div class="col-md-6 offset-md-3">
        <Box
      
      sx={{
        '& .MuiTextField-root': { m: 5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
            <h2 className={classes.head}>Message Details</h2>
            <form onSubmit={submitInfo}>
                <textarea className={classes.text} placeholder="Enter the Description" rows={5} onChange={inputChange}  name="description" value={desc} required/>

                {/* <label htmlFor="contained-button-file">
        <Input accept="image/jpeg" id="contained-button-file" type="file" />
        <Button  variant="outlined" component="span" color="secondary">
          Upload Image
        </Button>
      </label> */}
          <input type="file"
       id="avatar" name="avatar"
       accept="image/*" onChange={inputImg}   required/>
      <br></br><br></br>
      
      <Button  type="submit" fullWidth variant="outlined" endIcon={<SendIcon />} color="secondary">
        post message
      </Button>
      
            </form>
            <br></br>
            <br></br>
        {/* <img src={`https://ipfs.infura.io/ipfs/${ipfsHash}`}  width="300px" height="300px" /> */}
      { flag === true?
      <Alert 
      action={
        <Button color="primary" size="small"
            onClick={()=>{window.location.href="/"}}>
            Home Page
        </Button>
    }
      severity="success">Message Successfully Posted</Alert>
      :null}
        <br>
        </br><br></br>
        </Box>
        </div>
        </div>
        </div>
        </>
    );

}

export default Post;