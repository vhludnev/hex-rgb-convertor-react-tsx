import * as React from "react";
import { RGBContext } from "./context";

//const hexToRgb = (hex: number | string): number[] | void => {
const hexToRgb = (hex: any) => {
  if (hex) {
    return hex
      .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
      ,(m: string, r: number, g: number, b: number) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      .map((x: string) => parseInt(x, 16))
  }
}



const rgbToHex = (red: number, green: number, blue: number) => {
  const ColorToHex = (color: number) => {
    const hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
  }

  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}

export const ColorHexInput = () => {
  const [ rgbValue, setRgbValue ] = React.useState(null || '')
  const [ convertToRgb, setConvertToRgb ] = React.useState(true)
  const hexRefInput = React.useRef<HTMLInputElement>(null)
  const rgbRefInput = React.useRef<HTMLInputElement>(null)
  const { red, green, blue, dispatch } = React.useContext(RGBContext);

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (convertToRgb) {
      if (hexRefInput && hexRefInput.current) {
        const hex = hexRefInput.current.value || '#B2D3C2';
        dispatch({ type: 'ADJUST_RED', payload: hexToRgb(hex)[0] });
        dispatch({ type: 'ADJUST_GREEN', payload: hexToRgb(hex)[1] });
        dispatch({ type: 'ADJUST_BLUE', payload: hexToRgb(hex)[2] });
      }
    } else {
      setRgbValue(rgbToHex(red, green || red, blue || red));
    }  
  };

  React.useEffect(() => {
    if (convertToRgb) {
      if (hexRefInput.current && hexRefInput.current.value.length) {       
        if (!isNaN(red) && !isNaN(green) && !isNaN(blue)) {         
          hexRefInput.current.value = rgbToHex(red, green || red, blue || red);
        } else (
          hexRefInput.current.value = ''
        )
      }
    }
  }, [convertToRgb, red, green, blue]);


  return (
    <div className="color-hex-input">
      <label htmlFor='hex'>Convert: <br/>
        <span style={{color: convertToRgb ? 'lightseagreen' : 'grey'}} onClick={() => {setConvertToRgb(true); setRgbValue('')}}>HEX to RGB</span>
        {' '}&hArr;{' '}
        <span style={{color: convertToRgb ? 'grey' : 'lightseagreen'}} onClick={() => setConvertToRgb(false)}>RGB to HEX</span>
      </label>
      <div>
        { convertToRgb ? 
          <input ref={hexRefInput} id='hex' type="text" minLength={4} maxLength={7} placeholder="Enter HEX" />
        : <div ref={rgbRefInput} id='rgb'>{rgbValue ? rgbValue : "Click OK for RGB"}</div>
        }
        <button className="hex_btn" onClick={onButtonClick}>ok</button>
      </div>
    </div>
  );
};
