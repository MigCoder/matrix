import * as React from 'react'
import { Motion, spring } from 'react-motion'
import { MatrixContainer } from '../common/matrix.container'
import { MatrixHelper } from '../common/matrix.helper'
import { springPresets } from '../common/springPresets'

export default class FlipXExample extends React.Component {
  public render() {
    return <Motion defaultStyle={{x: 1}}
                   style={{x: spring(-1, springPresets.loop)}}>
      {({x}) => <MatrixContainer
        matrix={MatrixHelper.getFlipXMatrix(x)}>
        {this.props.children}
      </MatrixContainer>}
    </Motion>
  }
}


