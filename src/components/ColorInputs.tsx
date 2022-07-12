import { ChangeEvent, useContext } from 'react';
import { ColorInput } from './ColorInput';
import { RGBContext } from './context';

export const ColorInputs = () => {
  const { red, green, blue, dispatch } = useContext(RGBContext);
  
  const adjustRed = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_RED', payload: +event.target.value });
  };

  const adjustGreen = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_GREEN', payload: +event.target.value });
  };

  const adjustBlue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_BLUE', payload: +event.target.value });
  };

  return (
    <section className="color-inputs">
      <ColorInput id="red-input" label="Red" value={red} onChange={adjustRed} />
      <ColorInput id="green-input" label="Green" value={green} onChange={adjustGreen} />
      <ColorInput id="blue-input" label="Blue" value={blue} onChange={adjustBlue} />
    </section>
  );
};
