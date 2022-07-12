import { render } from 'react-dom';

import Application from './Application';

import { ThemeProvider } from './components/theme-context';
import { RGBContextProvider } from './components/context';

import './style.scss';

const rootElement = document.getElementById('root');
render(
  <ThemeProvider>
    <RGBContextProvider>
      <Application />
    </RGBContextProvider>
  </ThemeProvider>,
  rootElement
);