import erc20 from 'config/abi/erc20.json'
import ifo from 'config/abi/ifo.json'
import lottery from 'config/abi/lottery.json'
import lotteryTicket from 'config/abi/lotteryNft.json'
import masterPlanet from 'config/abi/masterplanet.json'
import pancakeRabbits from 'config/abi/pancakeRabbits.json'
import rabbitmintingfarm from 'config/abi/rabbitmintingfarm.json'
import referral from 'config/abi/referral.json'
import sousChef from 'config/abi/sousChef.json'
import sousChefBnb from 'config/abi/sousChefBnb.json'
import { poolsConfig } from 'config/constants'
import { PoolCategory } from 'config/constants/types'
import useWeb3 from 'hooks/useWeb3'
import { useEffect, useState } from 'react'
import { geReferralContractAddress, getCakeAddress, getLotteryAddress, getLotteryTicketAddress, getMasterPlanetAddress } from 'utils/addressHelpers'
import { ContractOptions } from 'web3-eth-contract'
import { AbiItem } from 'web3-utils'

const useContract = (abi: AbiItem, address: string, contractOptions?: ContractOptions) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState(new web3.eth.Contract(abi, address, contractOptions))

  useEffect(() => {
    setContract(new web3.eth.Contract(abi, address, contractOptions))
  }, [abi, address, contractOptions, web3])

  return contract
}

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useIfoContract = (address: string) => {
  const ifoAbi = (ifo as unknown) as AbiItem
  return useContract(ifoAbi, address)
}

export const useERC20 = (address: string) => {
  const erc20Abi = (erc20 as unknown) as AbiItem
  return useContract(erc20Abi, address)
}

export const useCake = () => {
  return useERC20(getCakeAddress())
}

export const useRabbitMintingFarm = (address: string) => {
  const rabbitMintingFarmAbi = (rabbitmintingfarm as unknown) as AbiItem
  return useContract(rabbitMintingFarmAbi, address)
}

export const usePancakeRabbits = (address: string) => {
  const pancakeRabbitsAbi = (pancakeRabbits as unknown) as AbiItem
  return useContract(pancakeRabbitsAbi, address)
}

export const useLottery = () => {
  const abi = (lottery as unknown) as AbiItem
  return useContract(abi, getLotteryAddress())
}

export const useLotteryTicket = () => {
  const abi = (lotteryTicket as unknown) as AbiItem
  return useContract(abi, getLotteryTicketAddress())
}

export const useMasterplanet = () => {
  const abi = (masterPlanet as unknown) as AbiItem
  return useContract(abi, getMasterPlanetAddress())
}

export const useReferralContract = () => {
  const abi = (referral as unknown) as AbiItem
  return useContract(abi, geReferralContractAddress())
}

export const useSousChef = (id) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  const rawAbi = config.poolCategory === PoolCategory.BINANCE ? sousChefBnb : sousChef
  const abi = (rawAbi as unknown) as AbiItem
  return useContract(abi, config.contractAddress[process.env.REACT_APP_CHAIN_ID])
}

export default useContract
