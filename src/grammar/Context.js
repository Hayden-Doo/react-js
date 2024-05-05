import React, { createContext, useContext } from 'react'

const themes = {
  light: {
    foreground: 'blue',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: 'red',
  },
}

const ThemeContext = createContext(themes.light)

const Context = () => {
  return (
    <div>
      Context
      <ThemeContext.Provider value={themes.light}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  )
}

const Toolbar = () => {
  return (
    <div>
      Toolbar
      <ToolbarBox />
    </div>
  )
}

const ToolbarBox = () => {
  const theme = useContext(ThemeContext)
  //theme == themes.light
  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      ToolbarBox
    </div>
  )
}

export default Context
