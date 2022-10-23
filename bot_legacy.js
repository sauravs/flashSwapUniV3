// first make an server which will contnously listen to swap event on sushiswap

// -- HANDLE INITIAL SETUP -- //


const { ethers } = require("ethers");
require('./helpers/server');
require("dotenv").config();
//const config = require('../config.json');


//const config = require('./config.json')
// const { getTokenAndContract, getPairContract, calculatePrice, getEstimatedReturn, getReserves } = require('./helpers/helpers')
// const { uFactory, uRouter, sFactory, sRouter, web3, arbitrage } = require('./helpers/initialization')

const { ChainId, Token } = require("@uniswap/sdk")
const IUniswapV2Pair = require("@uniswap/v2-core/build/IUniswapV2Pair.json")
const IERC20 = require('@openzeppelin/contracts/build/contracts/ERC20.json')

const SUSHISWAP_FACTORY_ADDRESS =  "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac" ;
const SUSHISWAP_ROUTERV2_ADDRESS = "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F" ;



// -- .ENV VALUES HERE -- //

// const arbFor = process.env.ARB_FOR ;                      // This is the address of token we are attempting to arbitrage (WETH)
// const arbAgainst = process.env.ARB_AGAINST ;              // SHIB
// const units = process.env.UNITS ;                        // Used for price display/reporting
// const difference = process.env.PRICE_DIFFERENCE ;
// const gas = process.env.GAS_LIMIT;
// const estimatedGasCost = process.env.GAS_PRICE ;        // Estimated Gas: 0.008453220000006144 ETH + ~10%

// let uPair, sPair, amount
// let isExecuting = false

  //UniswapV3Pool   
  const main = async () => {  
    
    // const { token0Contract, token1Contract, token0, token1 } = await getTokenAndContract(arbFor, arbAgainst)
    // uPair = await getPairContract(uFactory, token0.address, token1.address)
    // sPair = await getPairContract(sFactory, token0.address, token1.address)

    // console.log(`uPair Address: ${uPair._address}`)
    // console.log(`sPair Address: ${sPair._address}\n`)
    
      
    // uPair.events.Swap({}, async () => {
    //     if (!isExecuting) {
    //         isExecuting = true

    //         const priceDifference = await checkPrice('Uniswap', token0, token1)
    //         const routerPath = await determineDirection(priceDifference)

    //         if (!routerPath) {
    //             console.log(`No Arbitrage Currently Available\n`)
    //             console.log(`-----------------------------------------\n`)
    //             isExecuting = false
    //             return
    //         }

    //         const isProfitable = await determineProfitability(routerPath, token0Contract, token0, token1)

    //         if (!isProfitable) {
    //             console.log(`No Arbitrage Currently Available\n`)
    //             console.log(`-----------------------------------------\n`)
    //             isExecuting = false
    //             return
    //         }

    //         const receipt = await executeTrade(routerPath, token0Contract, token1Contract)

    //         isExecuting = false
    //     }
















                 
              
    
    console.log('hi');
  };



  main();






























