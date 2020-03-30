const { Calculator } = require('../calculator')

describe('Calculator Test', () => {
  it('Add method', () => {
    const [firstInput, secondInput, output] = [5, 5, 10]
    expect(Calculator.add(firstInput, secondInput)).toEqual(output)
  })

  it('Subtract method', () => {
    const [firstInput, secondInput, output] = [5, 5, 0]
    expect(Calculator.subtract(firstInput, secondInput)).toEqual(output)
  })

  it('Multiplication method', () => {
    const [firstInput, secondInput, output] = [5, 5, 25]
    expect(Calculator.multiplication(firstInput, secondInput)).toEqual(output)
  })

  it('Division method', () => {
    const [firstInput, secondInput, output] = [5, 5, 1]
    expect(Calculator.division(firstInput, secondInput)).toEqual(output)
  })

  it('Average method', () => {
    const input = [5, 7]
    const output = 6
    expect(Calculator.average(input)).toEqual(output)
  })
})
