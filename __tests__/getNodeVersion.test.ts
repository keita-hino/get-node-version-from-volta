import {getNodeVersion} from '../src/getNodeVersion'
import {describe, expect, test} from '@jest/globals'

const fixturePath = './__tests__/fixture'

describe('existsVueTsc', () => {
  test('return node version when package.json contains volta', () => {
    const nodeVersion = getNodeVersion(fixturePath)

    expect(nodeVersion).toBe('14.18.1')
  })
})
