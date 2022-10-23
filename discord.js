const { ethers } = require("ethers");
require('./helpers/server');
const provider = new ethers.providers.JsonRpcProvider('https://polygon-mainnet.g.alchemy.com/v2/zF-EZv66IP0tcXh9wNv4s6VmxSmW9RMN');
const { abi: IUniswapV3PoolABI } = require('@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json');
const { abi: SwapRouterABI} = require('@uniswap/v3-periphery/artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json');
const { getPoolImmutables, getPoolState } = require('./helpers/helpers.js');
const IERC20 = require('@openzeppelin/contracts/build/contracts/ERC20.json');                      // try with ./abi


const UNIV3_PoolAddress = "0xa374094527e1673a86de625aa59517c5de346d32";            // WMATIC-USDC pool on polygon mainnet
const UNIV3_SwapRouterAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564";     

const token0_address = 0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270 ;   // WMATIC on Polycon
const token1_address = 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174 ;   // USDC on Polygon
const token0_contract = new ethers.Contract(token0_address,IERC20.abi,provider);
const token1_contract = new ethers.Contract (token1_address,IERC20.abi,provider);

const main = async () => { 

const poolContract = new ethers.Contract(UNIV3_PoolAddress,IUniswapV3PoolABI, provider);
console.log('univ3_poolContract',poolContract.address);
poolContract.on("Swap",(sender,recipient,amount0,amount1,sqrtPriceX96,liquidity,tick, event)=>{
  let info = {
     sender: sender,
    recipient: recipient,
    amount0: amount0,
    amount1: amount1,
    sqrtPriceX96: sqrtPriceX96,
    liquidity: liquidity,
    tick: tick,
    data: event,
  };
console.log(JSON.stringify(info));

});        
    
  };

  main();

