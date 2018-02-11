// @flow

import * as React from 'react';

import Icon from '../icon';
import { Container, Wrapper, Divider } from './styled';

class Tools extends React.PureComponent<{}> {
  render() {
    return (
      <Container>
        <Wrapper>
          <Icon name="undo" />
        </Wrapper>
        <Wrapper>
          <Icon name="redo" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatPaint" />
        </Wrapper>
        <Divider />
        <Wrapper>
          <Icon name="formatBold" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatItalic" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatUnderlined" />
        </Wrapper>
        <Divider />
        <Wrapper>
          <Icon name="formatListBulleted" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatListNumbered" />
        </Wrapper>
        <Wrapper>
          <Icon name="checkBox" />
        </Wrapper>
        <Divider />
        <Wrapper>
          <Icon name="formatAlignLeft" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatAlignRight" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatIndentDecrease" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatIndentIncrease" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatLineSpacing" />
        </Wrapper>
        <Divider />
        <Wrapper>
          <Icon name="search" />
        </Wrapper>
        <Wrapper>
          <Icon name="textsms" />
        </Wrapper>

        <Wrapper>
          <Icon name="undo" />
        </Wrapper>
        <Wrapper>
          <Icon name="redo" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatPaint" />
        </Wrapper>
        <Divider />
        <Wrapper>
          <Icon name="formatBold" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatItalic" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatUnderlined" />
        </Wrapper>
        <Divider />
        <Wrapper>
          <Icon name="formatListBulleted" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatListNumbered" />
        </Wrapper>
        <Wrapper>
          <Icon name="checkBox" />
        </Wrapper>
        <Divider />
        <Wrapper>
          <Icon name="formatAlignLeft" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatAlignRight" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatIndentDecrease" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatIndentIncrease" />
        </Wrapper>
        <Wrapper>
          <Icon name="formatLineSpacing" />
        </Wrapper>
        <Divider />
        <Wrapper>
          <Icon name="search" />
        </Wrapper>
        <Wrapper>
          <Icon name="textsms" />
        </Wrapper>
      </Container>
    );
  }
}

export default Tools;
