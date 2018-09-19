import * as React from 'react'

export const MatrixContainer = ({children, matrix}: {
  children: any,
  matrix: string
}) => <div className='matrix-container'
           style={{transform: matrix}}>{children}</div>
