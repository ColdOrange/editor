// @flow

import * as React from 'react';

type Props = {
  name?: string
};

class Avatar extends React.PureComponent<Props> {
  render() {
    const { name = '游客' } = this.props;
    const initial = name.charAt(0);
    const color = colors[unicodePoints(name) % colors.length];

    return (
      <svg height="50" width="50">
        <circle fill={color} cx="25" cy="25" r="16" />
        <text fill="#ffffff" fontSize="16" textAnchor="middle" x="25" y="31">
          {initial}
        </text>
      </svg>
    );
  }
}

// calculate the unicode points of the name string
const unicodePoints = (src: string): number => {
  let codePoints = 0;
  let index = 0;
  while (index < src.length) {
    const codePoint = src.codePointAt(index);
    index += codePoint <= 0x10000 ? 1 : 2;
    codePoints += codePoint;
  }
  return codePoints;
};

// colors used as avatar background
const colors = [
  '#1abc9c',
  '#16a085',
  '#f1c40f',
  '#f39c12',
  '#2ecc71',
  '#27ae60',
  '#e67e22',
  '#d35400',
  '#3498db',
  '#2980b9',
  '#e74c3c',
  '#c0392b',
  '#9b59b6',
  '#8e44ad',
  '#bdc3c7',
  '#34495e',
  '#2c3e50',
  '#95a5a6',
  '#7f8c8d',
  '#ec87bf',
  '#d870ad',
  '#f69785',
  '#9ba37e',
  '#b49255',
  '#b49255',
  '#a94136'
];

export default Avatar;
