module.exports = function solveEquation(equation) {
  let parameters = getParameters(equation)

  let a = parameters[0]
  let b = parameters[1]
  let c = parameters[2]

  let D = b*b - 4 * a * c

  let x1 = (-1 * b + Math.sqrt(D)) / (2 * a)
  let x2 = (-1 * b - Math.sqrt(D)) / (2 * a)

  if (a > 0) {
    let temp = x1
    x1 = x2
    x2 = temp
  }

  return [Math.round(x1), Math.round(x2)]
}

function getParameters(equation) {
  equation = equation.replace(/\s/g,'')
  const regex = /([\-/+]+[0-9])+([0-9]*\.?[0-9]+)|(^[0-9]+)|([\-]+[0-9])/gm;
  
  return equation.match(regex)
}
