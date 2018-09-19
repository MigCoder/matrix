import * as React from 'react'
import { Motion, spring } from 'react-motion'
import { MatrixContainer } from '../common/matrix.container'
import { MatrixHelper } from '../common/matrix.helper'
import { springPresets } from '../common/springPresets'

export default class SkewYExample extends React.Component {
  public render() {
    return <Motion defaultStyle={{skew: 0}}
                   style={{skew: spring(1, springPresets.loop)}}>
      {({skew}) => <MatrixContainer
        matrix={MatrixHelper.getSkewYMatrix(skew)}>
        {this.props.children}
      </MatrixContainer>}
    </Motion>
  }
}

