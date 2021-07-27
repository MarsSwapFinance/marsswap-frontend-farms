import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@pancakeswap-libs/uikit'
import { CommunityTag, CoreTag, NoFeeTag, RiskTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  tokenSymbol: string
  quoteTokenSymbol: string
  isTokenOnly: boolean
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const FarmImage = ({ tokenSymbol, quoteTokenSymbol, isTokenOnly }: { tokenSymbol: string, quoteTokenSymbol: string, isTokenOnly: boolean }) => {
  if (isTokenOnly) {
    return <Image src={`/images/tokens/${tokenSymbol.toLocaleLowerCase()}.png`} alt={quoteTokenSymbol} width={48} height={48} />
  }
  return (
    <div className="flex space-x-1" style={{ display: 'flex' }}>
      <img src={`/images/tokens/${tokenSymbol.toLocaleLowerCase()}.png`} alt={tokenSymbol} width={48} height={48} style={{ zIndex: 2 }} />
      <img src={`/images/tokens/${quoteTokenSymbol.toLocaleLowerCase()}.png`} alt={tokenSymbol} width={48} height={48} style={{ marginLeft: '-1em', zIndex: 1 }} />
    </div>
  )
}


const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  risk,
  tokenSymbol,
  quoteTokenSymbol,
  isTokenOnly,
  depositFee,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <FarmImage tokenSymbol={tokenSymbol} quoteTokenSymbol={quoteTokenSymbol} isTokenOnly={isTokenOnly} />
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel}</Heading>
        <Flex justifyContent="center">
          {depositFee === 0 ? <NoFeeTag /> : null}
          {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
          {/* <RiskTag risk={risk} /> */}
          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
