// @flow

import * as React from 'react';

import Button from '../button';
import { Wrapper, Status, Group } from './styled';
import Input from './input';

type Props = {
  title: string
};

class Title extends React.PureComponent<Props> {
  render() {
    const { title } = this.props;
    return (
      <Wrapper>
        <Group>
          <Input defaultValue={title} />
          <Status>所有更新已保存在云端</Status>
        </Group>
        <Group>
          <Button>邀请</Button>
          <Button primary>分享</Button>
        </Group>
      </Wrapper>
    );
  }
}

export default Title;
