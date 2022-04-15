const {ethers} = require("ethers");


const ALCHEMY_ID = "UHL7oBq0LXYkY3FnyZvMxUdJKdo9qoZ6";
const provider = new ethers.providers.JsonRpcProvider(`https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_ID}`);

contractAddress = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709"

const ERC20_ABI = [
    "event Transfer(address indexed from, address indexed to, uint256 value)"
]
const linkContract = new ethers.Contract(contractAddress,ERC20_ABI,provider)
latestBlock = 10508424
const main = async () => {
    const transferEvents = await linkContract.queryFilter('Transfer',latestBlock-10,latestBlock)
    console.log(transferEvents)
}

main()