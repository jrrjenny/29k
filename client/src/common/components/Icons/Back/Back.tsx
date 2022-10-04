import React from 'react';
import {Path} from 'react-native-svg';
import {IconType} from '..';
import {COLORS} from '../../../../../../shared/src/constants/colors';
import Icon from '../Icon';

export const BackIcon: IconType = ({fill = COLORS.BLACK}) => (
  <Icon>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.883 5.055c.369.152.546.573.394.943a19.728 19.728 0 0 0-1.469 6.985l.025 1.45a23.684 23.684 0 0 1 2.448.275c1.611.268 3.67.795 5.105 1.87 1.924 1.433 2.846 3.043 2.946 4.623.099 1.572-.625 2.962-1.683 3.938-1.002.933-2.5 1.548-4.082 1.37-1.614-.18-3.206-1.173-4.39-3.248-.839-1.466-1.273-3.482-1.503-5.063a29.618 29.618 0 0 1-.245-2.37 101.004 101.004 0 0 0-3.836-.021c-2.621.037-5.684.198-7.66.67a.722.722 0 0 1-.336-1.405c2.15-.513 5.358-.673 7.975-.71a101.054 101.054 0 0 1 3.815.02l-.024-1.39v-.03c.064-2.58.599-5.125 1.578-7.513a.722.722 0 0 1 .942-.394ZM16.88 15.883l.204.015c.5.037 1.192.107 1.96.235 1.568.26 3.333.745 4.477 1.603l.002.001c1.689 1.258 2.301 2.514 2.367 3.555.066 1.052-.414 2.041-1.222 2.786l-.002.003c-.73.68-1.82 1.119-2.938.993-1.085-.121-2.304-.788-3.296-2.53-.697-1.218-1.103-3.004-1.328-4.554a28.159 28.159 0 0 1-.224-2.106Z"
      fill={fill}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.15 11.08a.722.722 0 0 1 .12 1.015l-2.867 3.634 3.307 2.844a.722.722 0 1 1-.942 1.095l-3.831-3.295a.722.722 0 0 1-.097-.995L5.135 11.2a.722.722 0 0 1 1.014-.12Z"
      fill={fill}
    />
  </Icon>
);
