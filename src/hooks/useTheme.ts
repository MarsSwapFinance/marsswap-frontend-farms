import { ThemeContext } from 'contexts/ThemeContext'
import { useContext } from 'react'
import { ThemeContext as StyledThemeCopntext } from 'styled-components'

const useTheme = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext)
  const theme = useContext(StyledThemeCopntext)
  return { isLight, toggleTheme, theme }
}

export default useTheme
