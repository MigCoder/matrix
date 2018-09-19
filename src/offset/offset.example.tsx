import * as React from 'react'
import { Motion, spring } from 'react-motion'
import { MatrixContainer } from '../common/matrix.container'
import { MatrixHelper } from '../common/matrix.helper'
import { springPresets } from '../common/springPresets'

export class OffsetXExample extends React.Component {
  public render() {
    return <Motion defaultStyle={{offset: 0}}
                   style={{offset: spring(400, springPresets.loop)}}>
      {({offset}) => <MatrixContainer
        matrix={MatrixHelper.getOffsetXMatrix(offset)}>
        {this.props.children}
      </MatrixContainer>}
    </Motion>
  }
}
export class OffsetYExample extends React.Component {
  public render() {
    return <Motion defaultStyle={{offset: 600}}
                   style={{offset: spring(200, springPresets.loop)}}>
      {({offset}) => <MatrixContainer
        matrix={MatrixHelper.getOffsetYMatrix(offset)}>
        {this.props.children}
      </MatrixContainer>}
    </Motion>
  }
}


