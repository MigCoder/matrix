import * as React from 'react'
import { Motion, spring } from 'react-motion'
import { MatrixContainer } from '../common/matrix.container'
import { MatrixHelper } from '../common/matrix.helper'
import { springPresets } from '../common/springPresets'

export default class ScaleExample extends React.Component {
  public render() {
    return <Motion defaultStyle={{scale: 1}}
                   style={{scale: spring(1.5, springPresets.loop)}}>
      {({scale}) => <MatrixContainer
        matrix={MatrixHelper.getScaleMatrix(scale, scale)}>
        {this.props.children}
      </MatrixContainer>}
    </Motion>
  }
}


