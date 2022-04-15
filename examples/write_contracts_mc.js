const {ethers} = require("ethers");


const ALCHEMY_ID = "UHL7oBq0LXYkY3FnyZvMxUdJKdo9qoZ6";
const provider = new ethers.providers.JsonRpcProvider(`https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_ID}`);

from_key = 'ea0e2252da649a9774bcab484321d4e509f6d7ddced51b2b104d65663d9295a0';
const wallet = new ethers.Wallet(from_key, provider);

contractAddress = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709"
account2 = "0x4ca65dc21425Ee22301Cc5D1Dd411e58ad96DAC2"

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns(uint256)",
    "function transfer(address to, uint value) public returns (bool)"
]
const linkContract = new ethers.Contract(contractAddress,ERC20_ABI,provider)
balance = 200000

const main = async () =>  {
    const connectWithWallet = linkContract.connect(wallet)
    const tx = await connectWithWallet.transfer(account2, balance)
    await tx.wait()
    console.log(tx)
    }
    
    main()