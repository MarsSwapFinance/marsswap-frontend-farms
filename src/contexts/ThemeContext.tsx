import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'

const CACHE_KEY = 'IS_LIGHT'

const ThemeContext = React.createContext({ isLight: null, toggleTheme: () => null })

const ThemeContextProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(() => {
    const isLightUserSetting = localStorage.getItem(CACHE_KEY)
    return isLightUserSetting ? JSON.parse(isLightUserSetting) : false
  })

  const toggleTheme = () => {
    setIsLight((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      <SCThemeProvider theme={isLight ? light : dark}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
