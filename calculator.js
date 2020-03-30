class Calculator {
  static add (x, y) {
    return x + y
  }

  static subtract (x, y) {
    return x - y
  }

  static multiplication (x, y) {
    return x * y
  }

  static division (x, y) {
    return x / y
  }

  static average(args){
    let total = 0
    args.forEach((num) => {
      console.log("Num", num);
      total += num
    })
    return total / args.length
  }
}

module.exports = { Calculator: Calculator }
