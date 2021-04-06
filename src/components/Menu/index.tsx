import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceMarsBusd } from 'state/hooks'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isLight, toggleTheme } = useTheme()
  const marsPriceUsd = usePriceMarsBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={!isLight}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={marsPriceUsd.toNumber()}
      links={config}
      priceLink=""
      {...props}
    />
  )
}

export default Menu
