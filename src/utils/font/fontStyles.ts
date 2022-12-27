export type FontWight =
  | 'hairline'
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'heavy'
  | 'black';

export type FontFamily = 'primary';

export const FONTS: {[font in FontFamily]: {[width in FontWight]: string}} = {
  primary: {
    hairline: 'Lato-Hairline', // 100
    thin: 'Lato-Thin', // 200
    light: 'Lato-Light', // 300
    regular: 'Lato-Regular', // 400
    medium: 'Lato-Medium', // 500
    semibold: 'Lato-Semibold', // 600
    bold: 'Lato-Bold', // 700
    heavy: 'Lato-Heavy', // 800
    black: 'Lato-Black', // 900
  },
};
