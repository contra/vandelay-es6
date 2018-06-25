/*eslint no-console: 0*/

import should from 'should'
import compile from '../src'

describe('util', () => {
  it('should exist', async () => {
    should.exist(compile)
    should.equal(typeof compile, 'function')
  })
  it('should compile es6 code', async () => {
    const code = `
      const a = { d: 456 }
      const b = { ...a, c: 123 }
      export default (a) => {
        console.log(b)
      }
    `
    const res = compile(code)
    should.exist(res)
  })
})
