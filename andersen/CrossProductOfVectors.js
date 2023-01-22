function crossProduct (vector1, vector2) {
  for (let i = 0; i <= 1; i++) {
    if (!(Array.isArray(arguments[i]) && arguments[i].length === 3)) {
      throw new Error('Arguments are not 3D vectors!');
      return null;
    }
  }

  return [
    vector1[1]*vector2[2] - vector1[2]*vector2[1],
    vector1[2]*vector2[0] - vector1[0]*vector2[2],
    vector1[0]*vector2[1] - vector1[1]*vector2[0]
  ]
}