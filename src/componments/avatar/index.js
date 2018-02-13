// @flow

import * as React from 'react';

/**
 * type UserType = {
 *  name: string,
 *  avatarUrl: string,
 *  ...
 * }
 */

type Props = {
  name?: string
  // user: ?UserType 应该是这样，因为没有图片，所以直接接受用户名吧
};

class Avatar extends React.PureComponent<Props> {
  render() {
    return <div />;
  }
}

export default Avatar;
