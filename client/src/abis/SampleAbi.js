const SampleAbi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tasks",
    "outputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "content",
        "type": "string"
      },
      {
        "name": "imgHash",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x8d977672"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "taskCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xb6cb58a5"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "content",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "imgHash",
        "type": "string"
      }
    ],
    "name": "TaskCreated",
    "type": "event",
    "signature": "0x83348630f55265468244ba33169a527bb52653f19f0a29750cdd794aa6840624"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_content",
        "type": "string"
      },
      {
        "name": "_img",
        "type": "string"
      }
    ],
    "name": "createTask",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x292a4585"
  }
]

export default SampleAbi;