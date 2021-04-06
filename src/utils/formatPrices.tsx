import React from 'react'

export const formatPriceChange = (priceNow: number, priceBefore: number) => {
  const change = ((Number(priceNow) - Number(priceBefore)) * 100) / Number(priceBefore)
  return <span style={{ color: change > 0 ? 'green' : 'red' }}>{change > 0 ? '+' : ''}{roundNumber(change, 2)}%</span>
}

export const roundNumber = (input: number, roundDecimals: number) => {
  return Math.round(input * 10 ** roundDecimals) / 10 ** roundDecimals
}

export default {}
