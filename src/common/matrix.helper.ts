export class MatrixHelper {
  static getRotateMatrix(angle: number) {
    const radius = angle / 180 * Math.PI
    return `matrix(${Math.cos(radius)}, ${Math.sin(radius)}, 
                   ${-Math.sin(radius)}, ${Math.cos(radius)}, 0, 0)`
  }

  static getScaleMatrix(scaleX = 1, scaleY = 1) {
    return `matrix(${scaleX}, ${0}, 
                   ${0}, ${scaleY}, 0, 0)`
  }

  static getOffsetXMatrix(offsetX = 0) {
    return `matrix(1, 0,
                   0, 1, ${offsetX}, 0)`
  }

  static getOffsetYMatrix(offsetY = 0) {
    return `matrix(1, 0,
                   0, 1, 0, ${offsetY})`
  }

  static getFlipXMatrix(flipX = 0) {
    return `matrix(${flipX}, 0,
                   0, 1, 0, 0)`
  }

  static getFlipYMatrix(flipY = 0) {
    return `matrix(1, 0,
                   0, ${flipY}, 0, 0)`
  }

  static getSkewXMatrix(skewX = 0) {
    return `matrix(1, 0,
                   ${skewX}, 1, 0, 0)`
  }

  static getSkewYMatrix(skewY = 0) {
    return `matrix(1, ${skewY},
                   0, 1, 0, 0)`
  }
}
