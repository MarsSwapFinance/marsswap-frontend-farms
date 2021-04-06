import { useWallet } from "@binance-chain/bsc-use-wallet"
import { useEffect, useState } from "react"
import { useReferralContract } from "./useContract"

const useReferrals = () => {
  const { account } = useWallet()
  const referralContract = useReferralContract()
  const [referralsCount, setReferralsCount] = useState<number | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (account) {
      referralContract.methods.referralsCount(account).call()
        .then(setReferralsCount)
        .finally(() => setLoading(false))
    }
  }, [account, referralContract])

  return {
    referralsCount,
    loading
  }
}

export default useReferrals
