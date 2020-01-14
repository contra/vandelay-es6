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
  it('should throw errors correctly', async () => {
    const code = `
      const a = yyy{ d: 456 }
      const b = { ...a, c: 123 }
      export default (a) => {
        console.log(b)
      }
    `
    try {
      compile(code)
    } catch (err) {
      should.exist(err)
      should.exist(err.pos)
      should.exist(err.loc)
      should(err.code).equal('BABEL_PARSE_ERROR')
      return
    }
    throw new Error('Did not throw!')
  })
})
