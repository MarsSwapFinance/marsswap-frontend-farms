import { Heading } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import TickerBar from 'components/TickerBar'
import React from 'react'
import { TranslateString } from 'utils/translateTextHelpers'
import ReferralCard from './components/ReferralCard'

const Referrals: React.FC = () => {
  return (
    <Page>
      <TickerBar />
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        {
          TranslateString(10006, 'Invite your friends to MarsSwap and earn rewards')
        }
      </Heading>
      <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        Earn 1% of your friend&#39;s earnings! Share this link to invite friends:
      </Heading>
      <ReferralCard />
    </Page>
  )
}

export default Referrals
