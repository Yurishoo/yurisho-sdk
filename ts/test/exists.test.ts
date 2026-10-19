
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { PokeapiSdkSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = PokeapiSdkSDK.test()
    equal(testsdk instanceof PokeapiSdkSDK, true,
      'PokeapiSdkSDK.test() must return a client synchronously')
  })

})
