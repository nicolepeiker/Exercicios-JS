let carteira = {
  receitas: [255.0, 387.58, 436],
  despesas: [403.37, 2700, 620]
}

function sum(array) {
  let total = 0
  for (let value of array) {
    total += value
  }
  return total
}

let sumReceitas = sum(carteira.receitas)
let sumDespesas = sum(carteira.despesas)
let balance = sumReceitas - sumDespesas

function saldo(sumReceitas, sumDespesas) {
  if (sumReceitas - sumDespesas >= 0) {
    return console.log(
      `Você tem ${(sumReceitas - sumDespesas).toFixed(2)}. Saldo positivo`
    )
  } else {
    return console.log(
      `Você tem ${(sumReceitas - sumDespesas).toFixed(2)}. Saldo negativo`
    )
  }
}

saldo(sumReceitas, sumDespesas)
