const {ethers} = require("ethers");


const ALCHEMY_ID = "UHL7oBq0LXYkY3FnyZvMxUdJKdo9qoZ6";
const provider = new ethers.providers.JsonRpcProvider(`https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_ID}`);

from_key = '54348fe01361139b1cfc5fad87765caba98de438f1bbe995ac059817e9cfe54f';
const wallet = new ethers.Wallet(from_key, provider);

contractAddress = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709"

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns(uint256)",
    "function transfer(address _to, uint _value) public validRecipient(_to) returns (bool success)"
]
const linkContract = new ethers.Contract(contractAddress,ERC20_ABI,provider)

const main = async () =>  {
    wallet.sign
    
    }
    
    main()