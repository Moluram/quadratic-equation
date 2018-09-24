module.exports = function solveEquation(equation) {
  let parameters = getParameters(equation)

  let a = parameters[0]
  let b = parameters[1]
  let c = parameters[2]

  let D2 = Math.sqrt(b*b - 4 * a * c)

  D2 = a < 0 ? -1 * D2 : D2

  let x1 = (-1 * b - D2) / (2 * a)
  let x2 = (-1 * b + D2) / (2 * a)

  return [Math.round(x1), Math.round(x2)]
}

function getParameters(equation) {
  equation = equation.replace(/\s/g,'')
  const regex = /([\-/+]+[0-9])+([0-9]*\.?[0-9]+)|(^[0-9]+)|([\-]+[0-9])/gm;
  
  return equation.match(regex)
}
