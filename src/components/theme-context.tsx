import * as React from 'react';

const themes: { [key: string]: React.CSSProperties } = {
  light: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'lightsteelblue'
  },
  dark: {
    backgroundColor: '#555',
    color: 'white'
  }
};

export const ThemeContext = React.createContext(themes);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider 
      value={themes}
    >
      {children}
    </ThemeContext.Provider>
  );
};