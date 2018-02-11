// @flow

import * as React from 'react';

import { Input as StyledInput } from './styled';

type Props = {
  defaultValue?: string
};

type State = {
  width: string
};

type InputEvent = SyntheticInputEvent<HTMLInputElement>;

class Input extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const { defaultValue = '' } = this.props;
    const width = stringWidth(defaultValue);

    this.state = { width };
  }

  render() {
    const { defaultValue } = this.props;
    const { width } = this.state;
    return (
      <StyledInput
        palceholder="无标题"
        defaultValue={defaultValue}
        width={width}
        onChange={this.handleChange}
      />
    );
  }

  handleChange = (e: InputEvent) => {
    const width = stringWidth(e.target.value);

    this.setState({ width });
  };
}

// width of a string
const stringWidth = (src: string): string => {
  const length = src
    .split('')
    .reduce((prev, curr) => prev + charWidth(curr), 2);

  return `${length}px`;
};

const charWidth = (src: string): number => {
  if (/^[0-9]*$/.test(src)) return 9.5;
  if (/[^\x00-\xff]/.test(src)) return 14;

  return 9;
};

export default Input;
