import { createRoot } from 'react-dom/client';

import Application from './Application';

import { ThemeProvider } from './components/theme-context';
import { RGBContextProvider } from './components/context';

import './style.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <ThemeProvider>
    <RGBContextProvider>
      <Application />
    </RGBContextProvider>
  </ThemeProvider>
);