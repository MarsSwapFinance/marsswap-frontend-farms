import React from 'react'
import { Card, CardBody, Spinner } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import UnlockButton from 'components/UnlockButton'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useReferrals from 'hooks/useReferral'

const StyledReferralCard = styled(Card)`
  text-align: center;
`

const ReferralCard = () => {
  const { account } = useWallet()
  const referrals = useReferrals()

  if (referrals.loading) {
    return <Spinner />
  }

  return (
    <StyledReferralCard>
      <CardBody>
        {
          account
            ?
              <>
                <h1 style={{ fontSize: 24, marginBottom: 32 }}>Your Referral Link</h1>
                <p>https://marsswap.finance/?ref={account}</p>
                <h1 style={{ fontSize: 24, marginTop: 32, marginBottom: 16 }}>Total Referrals</h1>
                <p>{referrals?.referralsCount}</p>
              </>
            :
              <>
                <UnlockButton />
                <p style={{ marginTop: 16 }}>Unlock wallet to get your unique referral link.</p>
              </>
        }
      </CardBody>
    </StyledReferralCard>
  )
}

export default ReferralCard
