import * as React from 'react';

import { ColorSwatch } from './components/ColorSwatch';
import { ColorInputs } from './components/ColorInputs';
import { ColorSliders } from './components/ColorSliders';
import { ColorHeader } from './components/ColorHeader';


import { ThemeContext } from './components/theme-context';

const Application = () => {
  const themes = React.useContext(ThemeContext);
  const [ lightTheme, setLightTheme ] = React.useState(true)
  const toggleTheme = () => { setLightTheme(!lightTheme) }

  return (
    <main style={ lightTheme ? { ...themes.light } : { ...themes.dark } }>
      <ColorHeader lightTheme={lightTheme} toggleTheme={toggleTheme} />
      <ColorInputs />
      <ColorSliders />
      <ColorSwatch />
    </main>
  );
};

export default Application;
