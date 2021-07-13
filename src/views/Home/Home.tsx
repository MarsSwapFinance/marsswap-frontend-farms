import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import TickerBar from 'components/TickerBar'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CardImage = styled.img`
  margin-right: 12px;
  margin-bottom: 6px;
  vertical-align: middle;
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const { isDark } = useContext(ThemeContext);

  return (
    <Page>
      <TickerBar />
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {
            isDark ? <img src="/images/marsswap.png" alt="MARS logo" /> : <img src="/images/marsswap-light.png" alt="MARS logo" />
          }
        </Heading>
        <Text>{TranslateString(578, 'AMM and yield farm for Mirror tokens on Binance Smart Chain.')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
