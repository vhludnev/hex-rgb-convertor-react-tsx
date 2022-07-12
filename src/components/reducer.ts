import { RGBColorType } from './types';

const colors = ['red', 'green', 'blue'] as const;

type Colors = Uppercase<typeof colors[number]>;
//type ActionTypes = `ADJUST_${Colors}`;

export type AdjustmentAction = {
  type: `ADJUST_${Colors}`;
  payload: number;
};

export const reducer = (
  state: RGBColorType,
  action: AdjustmentAction
): RGBColorType => {
  for (const color of colors) {
    if (action.type === `ADJUST_${color.toUpperCase()}`) {
      return { ...state, [color]: action.payload }
    }
  }

  return state;
};


/* slightly longer version: */

// export type AdjustmentAction = {
//   type: 'ADJUST_RED' | 'ADJUST_GREEN' | 'ADJUST_BLUE';
//   payload: number;
// };

// export const reducer = (
//   state: RGBColorType,
//   action: AdjustmentAction
// ): RGBColorType => {
//   if (action.type === 'ADJUST_RED') {
//     return { ...state, red: action.payload };
//   }

//   if (action.type === 'ADJUST_GREEN') {
//     return { ...state, green: action.payload };
//   }

//   if (action.type === 'ADJUST_BLUE') {
//     return { ...state, blue: action.payload };
//   }

//   return state;
// };
