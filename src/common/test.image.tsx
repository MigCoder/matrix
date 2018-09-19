import * as React from 'react'
import testImg from '../assets/test.png';

export default ({matrix}:  {matrix?: string}) =>
  <img style={{transform: matrix}}
       width={200}
       height={280}
  src={testImg}/>
