import {FontFamily, FONTS, FontWight} from './fontStyles';
import {rem} from 'rn-units';
import {COLORS} from "../COLORS";

export const font = (
  fontSize: number,
  lineHeight?: number | null,
  fontWeight: FontWight = 'regular',
  color: keyof typeof COLORS = 'white',
  fontFamily: FontFamily = 'primary',
) => {
  return {
    fontSize: rem(fontSize),
    lineHeight: lineHeight != null ? rem(lineHeight) : undefined,
    fontFamily: FONTS[fontFamily][fontWeight],
    color: COLORS[color],
  };
};
