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
    const width = getWidth(defaultValue);

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
    const width = getWidth(e.target.value);

    this.setState({ width });
  };
}

const getWidth = (src: string) => {
  const length = src
    .split('')
    .reduce(
      (prev, curr) => (/[^\x00-\xff]/.test(curr) ? prev + 14 : prev + 9),
      2
    );
  return `${length}px`;
};

export default Input;
