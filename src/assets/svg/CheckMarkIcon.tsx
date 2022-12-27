import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const CheckMarkIcon = (props: SvgProps) => (
  <Svg viewBox={'0 0 12 9'} fill="none" {...props}>
    <Path
      d="m1.2 4.538 3.773 3.338M10.538 1.2 4.973 7.876"
      stroke={props.fill ?? 'white'}
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </Svg>
);
