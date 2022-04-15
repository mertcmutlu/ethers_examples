0x6B175474E89094C44Da98b954EedeAC495271d0F

const {ethers} = require("ethers");


const INFURA_ID = "528745e2499a41188b7e6f07ac1a2607";
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);
const baladdress = '0x141D1045c985A9cBA1173e36Cf1Bb8a5a91b2B5b'
const contractAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns(uint256)"
]

const daiContract = new ethers.Contract(contractAddress,ERC20_ABI,provider)

const main = async () =>  {
    const symbol = await daiContract.symbol();
    const name = await daiContract.name()
    const balance = await daiContract.balanceOf(baladdress)

    console.log(`reading from ${contractAddress}`);
    console.log(`name:  ${name}`);
    console.log(`symbol ${symbol}`);
    console.log(`balance of ${baladdress}: ${ethers.utils.formatEther(balance)}`)
    }
    
    main()