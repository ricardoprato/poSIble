const ContractABI = {
    abi: [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "address payable",
                    "name": "_platformAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_cost",
                    "type": "uint256"
                }
            ],
            "name": "createNewPlatform",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_description",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_occupation",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_country",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_indexPlatform",
                    "type": "uint256"
                }
            ],
            "name": "createNewStudent",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_studentIndex",
                    "type": "uint256"
                }
            ],
            "name": "fundStudent",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "occupation",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "country",
                    "type": "string"
                },
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "address payable",
                            "name": "platformAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "cost",
                            "type": "uint256"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct Crowdfunding.Platform",
                    "name": "platform",
                    "type": "tuple"
                }
            ],
            "name": "studentCreated",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "numStudents",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "platforms",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "address payable",
                    "name": "platformAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "cost",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "students",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "occupation",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "country",
                    "type": "string"
                },
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "address payable",
                            "name": "platformAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "cost",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Crowdfunding.Platform",
                    "name": "platform",
                    "type": "tuple"
                },
                {
                    "internalType": "enum Crowdfunding.State",
                    "name": "state",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    address: {
        5: "0xE1B4dC81CE7340194B5E9530A7B9AaE21b89A369",
    },
    etherABI: [
        "function numStudents view returns (uint265)",
    ]
};

export default ContractABI;