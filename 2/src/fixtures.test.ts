// WARNING: this file is generated automatically

describe('hehe', () => {
  it('addition.ts', async() => {
    const { result, expected } = await import('./fixtures/addition')
    expect(result.equals(expected)).toBeTruthy()
  })

  it('multiplication.ts', async() => {
    const { result, expected } = await import('./fixtures/multiplication')
    expect(result.equals(expected)).toBeTruthy()
  })
})
