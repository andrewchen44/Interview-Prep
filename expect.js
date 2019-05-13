const expect = ( actual, expected) => {
  if (actual !== expected) {
    console.error( `FAILED: Expected ${expected}, received ${actual}`)
  } else {
    console.info(`PASSED: Expected ${expected}, received ${actual}`)
  }
}

module.exports = expect