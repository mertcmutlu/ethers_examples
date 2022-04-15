const {ethers} = require("ethers");


const ALCHEMY_ID = "UHL7oBq0LXYkY3FnyZvMxUdJKdo9qoZ6";
const provider = new ethers.providers.JsonRpcProvider(`https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_ID}`);

from_account = '0xC3d0aE65942455f74c17c3c74DDe80C6888929f3';
to_account = '0xa8a678c51f1ac28fa556f84a976454b1e5A04E92';

from_key = '54348fe01361139b1cfc5fad87765caba98de438f1bbe995ac059817e9cfe54f';
const wallet = new ethers.Wallet(from_key, provider);


const main = async () =>  {

console.log(`balance of from_account: ${await provider.getBalance(from_account)}`)
console.log(`balance of to_account: ${await provider.getBalance(to_account)}`)    
const tx = await wallet.sendTransaction({to: to_account, value: ethers.utils.parseEther('0.001') })

await tx.wait();
console.log(tx);

console.log('after');
console.log(`balance of from_account: ${await provider.getBalance(from_account)}`)
console.log(`balance of to_account: ${await provider.getBalance(to_account)}`)  

}

main()