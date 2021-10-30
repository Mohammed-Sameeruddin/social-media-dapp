// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Sample{
    uint public taskCount = 0;

    struct Task {
        address owner;
        uint id;
        string content;
        string imgHash;
    }

    // constructor() public {
    //     createTask("Solidity Programming","image");
    // }

    mapping(uint => Task) public tasks;

    event TaskCreated(
        address owner,
        uint id,
        string content,
        string imgHash
    );


    function createTask(string memory _content,string memory _img) public {
        taskCount++;
        tasks[taskCount] = Task(msg.sender,taskCount,_content,_img);
        emit TaskCreated(msg.sender,taskCount,_content,_img);
    }

}