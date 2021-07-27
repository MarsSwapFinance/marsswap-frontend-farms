import BigNumber from 'bignumber.js'
import useRefresh from 'hooks/useRefresh'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { QuoteToken } from '../config/constants/types'
import { fetchFarmsPublicDataAsync, fetchPoolsUserDataAsync } from './actions'
import { fetchBnbPrice } from './farms'
import { Farm, Pool, State } from './types'

const ZERO = new BigNumber(0)

export const useFetchBnb = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchBnbPrice())
  }, [dispatch, slowRefresh])
}

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync())
  }, [dispatch, slowRefresh])
}

// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
  }
}


// Pools

export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}

// Prices

export const usePriceBnbBusd = (): BigNumber => {
  const bnbPrice = useSelector((state: State) => state.farms.bnbPrice)
  return bnbPrice
}

export const usePriceMarsBusd = (): BigNumber => {
  const marsBnbFarm = useFarmFromPid(0)
  const bnbBusdPrice = usePriceBnbBusd()
  return marsBnbFarm?.tokenPriceVsQuote && bnbBusdPrice ? bnbBusdPrice.times(marsBnbFarm.tokenPriceVsQuote) : ZERO
}

export const useTotalValue = (): BigNumber => {
  const farms = useFarms();
  const bnbPrice = usePriceBnbBusd();
  const marsPrice = usePriceMarsBusd();
  let value = new BigNumber(0);
  for (let i = 0; i < farms.length; i++) {
    const farm = farms[i]
    if (farm.lpTotalInQuoteToken) {
      let val;
      if (farm.quoteTokenSymbol === QuoteToken.BNB) {
        val = (bnbPrice?.times(farm.lpTotalInQuoteToken));
      } else if (farm.quoteTokenSymbol === QuoteToken.MARS) {
        val = (marsPrice?.times(farm.lpTotalInQuoteToken));
      } else {
        val = (farm.lpTotalInQuoteToken);
      }
      if (val?.toNumber()) {
        value = value.plus(val);
      }
    }
  }
  return value;
}