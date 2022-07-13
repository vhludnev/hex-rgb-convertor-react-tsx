import * as React from 'react';

import { ColorSwatch } from './components/ColorSwatch';
import { ColorInputs } from './components/ColorInputs';
import { ColorSliders } from './components/ColorSliders';
import { ColorHexInput } from './components/ColorHexInput';

import { ThemeContext } from './components/theme-context';

const Application = () => {
  const themes = React.useContext(ThemeContext);
  const [ lightTheme, setLightTheme ] = React.useState(true)

  return (
    <main style={ lightTheme ? { ...themes.light } : { ...themes.dark } }>
      <div className='top-row'>
        <ColorHexInput />
        <div className='theme-btn'>
          {!lightTheme 
            ? <button onClick={() => setLightTheme(!lightTheme)}>&#9788;</button> 
            : <button onClick={() => setLightTheme(!lightTheme)}>&#9789;</button>
          }
        </div>
      </div>
      <ColorSwatch />
      <ColorInputs />
      <ColorSliders />
    </main>
  );
};

export default Application;
