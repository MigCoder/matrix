import * as React from 'react'
import './App.css'
import {OffsetXExample, OffsetYExample} from './offset/offset.example'
import RotateExample from './rotate/rotate.example'
import ScaleExample from './scale/scale.example'
// import { RotateExample3 } from './rotate/rotate.example'
// import { RotateExample2 } from './rotate/rotate.example'
import TestImage from './common/test.image'
import FlipXExample from './flip/flipXExample'
import FlipYExample from './flip/flipYExample'
import SkewXExample from './skew/skewXExample'
import SkewYExample from './skew/skewYExample'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <h1>Matrix Transform Demo</h1>
        <SkewYExample>
          <SkewXExample>
            <FlipYExample>
              <FlipXExample>
        {/*<OffsetXExample>*/}
                {/*<OffsetYExample>*/}
                  <ScaleExample>
                    <RotateExample>
                      <TestImage/>
                    </RotateExample>
                  </ScaleExample>
                {/*</OffsetYExample>*/}
        {/*</OffsetXExample>*/}
              </FlipXExample>
            </FlipYExample>
          </SkewXExample>
        </SkewYExample>
        {/*<RotateExample2/>*/}
        {/*<RotateExample3 />*/}
      </div>
    )
  }
}

export default App
