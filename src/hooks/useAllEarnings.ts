import { useWallet } from '@binance-chain/bsc-use-wallet'
import masterPlanetABI from 'config/abi/masterplanet.json'
import { farmsConfig } from 'config/constants'
import { useEffect, useState } from 'react'
import { getMasterPlanetAddress } from 'utils/addressHelpers'
import multicall from 'utils/multicall'
import useRefresh from './useRefresh'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([])
  const { account }: { account: string } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchAllBalances = async () => {
      const calls = farmsConfig.map((farm) => ({
        address: getMasterPlanetAddress(),
        name: 'pendingMars',
        params: [farm.pid, account],
      }))

      const res = await multicall(masterPlanetABI, calls)

      setBalance(res)
    }

    if (account) {
      fetchAllBalances()
    }
  }, [account, fastRefresh])

  return balances
}

export default useAllEarnings
