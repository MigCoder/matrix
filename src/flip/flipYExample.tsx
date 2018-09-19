import * as React from 'react'
import { Motion, spring } from 'react-motion'
import { MatrixContainer } from '../common/matrix.container'
import { MatrixHelper } from '../common/matrix.helper'
import { springPresets } from '../common/springPresets'

export default class FlipYExample extends React.Component {
  public render() {
    return <Motion defaultStyle={{y: 1}}
                   style={{y: spring(-1, springPresets.loop)}}>
      {({y}) => <MatrixContainer
        matrix={MatrixHelper.getFlipYMatrix(y)}>
        {this.props.children}
      </MatrixContainer>}
    </Motion>
  }
}


