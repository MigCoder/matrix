import * as React from 'react'
import { Motion, presets, spring, StaggeredMotion, TransitionMotion } from 'react-motion'
import { MatrixContainer } from '../common/matrix.container'
import { MatrixHelper } from '../common/matrix.helper'
import { springPresets } from '../common/springPresets'
import TestImage from '../common/test.image'

export default class RotateExample extends React.Component {
  public render() {
    return <Motion defaultStyle={{angle: 0}}
                   style={{angle: spring(180, springPresets.loop)}}>
      {({angle}) => <MatrixContainer
        matrix={MatrixHelper.getRotateMatrix(angle)}>
        {this.props.children}
      </MatrixContainer> }
    </Motion>
  }
}

export class RotateExample2 extends React.Component {
  public render() {
    return <StaggeredMotion defaultStyles={[{angle: 0}, {angle: 0}, {angle: 0}]}
                            styles={(previousInterpolatedStyles = []) =>
                              previousInterpolatedStyles
                                .map((style, i) =>
                                  i === 0 ?
                                    {angle: spring(180, presets.wobbly)} :
                                    {angle: spring(previousInterpolatedStyles[i - 1].angle - 10)})}>
      {
        (styles: any) =>
            <div>
              {styles.map(({angle}: { angle: number }, key: number) =>
                <TestImage key={key}
                           matrix={MatrixHelper.getRotateMatrix(angle)} />)
              }
            </div>
      }
    </StaggeredMotion>
  }
}


export class RotateExample3 extends React.Component {
  private static willLeave() {
    return {angle: spring(90, presets.wobbly)};
  }

  state = {
    items: [1, 2, 3]
  }

  componentDidMount() {
    this.setState({
      items: [1, 2]
    })
  }

  public render() {
    const {items} = this.state;
    return <TransitionMotion willLeave={RotateExample3.willLeave}
                             defaultStyles={items.map((item, i) =>
                               ({key: i.toString(), style: {angle: 0}}))}
      styles={items.map((item, i) =>
        ({key: i.toString(), style: {angle: spring(180, presets.wobbly)}}))}>
      {
        (configs: any) =>
          <div>
            {configs.map((config: any) =>
              <TestImage key={config.key}
                         matrix={MatrixHelper.getRotateMatrix(config.style.angle)} />)
            }
          </div>
      }
    </TransitionMotion>
  }
}

