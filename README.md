# Jest Issue 2455 Reproduction

Reproduction of https://github.com/facebook/jest/issues/2455

To reproduce: `npm install` and then `npm test`.

Removing `"resetMocks": true` in `package.json` will make the tests pass.
Reverting to Jest 16 and using `"clearMocks": true` also passes. Adding
`jest.useFakeTimers()` to the test also makes it pass.
