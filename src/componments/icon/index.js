// @flow

import * as React from 'react';
import * as mdIcons from 'react-icons/lib/md';

type Props = {
  name: string,
  size?: number
};

class Icon extends React.PureComponent<Props> {
  render() {
    const { name, size = 18 } = this.props;
    const key = `Md${upper(name)}`;
    const MdIcon = mdIcons[key];

    return <MdIcon style={{ fontSize: `${size}px` }} />;
  }
}

const upper = (src: string) => {
  const arr = src.split('');

  arr[0] = arr[0].toUpperCase();

  return arr.join('');
};

export default Icon;
