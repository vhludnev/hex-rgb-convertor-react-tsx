import { MouseEvent } from 'react';
import { ColorHexInput } from '../components/ColorHexInput'

export interface ColorHeaderProps {
   lightTheme: boolean,
   toggleTheme: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const ColorHeader = ({ lightTheme, toggleTheme }: ColorHeaderProps) => {
  return (
   <div className='top-row'>
      <ColorHexInput />
      <div className='theme-btn'>
      {!lightTheme 
         ? <button onClick={toggleTheme}>&#9788;</button> 
         : <button onClick={toggleTheme}>&#9789;</button>
      }
      </div>
   </div>
  );
};
