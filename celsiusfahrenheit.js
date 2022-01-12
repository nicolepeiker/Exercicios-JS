function celciusOrFahrenheit(temperature, indicator) {
  if (indicator === 'F') {
    console.log(
      `${temperature} Fahrenheit equivale a ${(
        ((Number(temperature) - 32) * 5) /
        9
      ).toFixed(2)} Celsius.`
    )
  } else if (indicator === 'C') {
    console.log(
      `${temperature} Celsius equivale a ${(
        (Number(temperature) * 9) / 5 +
        32
      ).toFixed(2)} Fahrenheit.`
    )
  } else {
    console.log('Preencha os campos corretamente')
  }
}

celciusOrFahrenheit(42, 'C')

/*
Resolução Mayk

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  if (!celsiusExists && fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  let updatedDegree = Number(degree.toUpperCase().replace('F', ""))
  let formula = (fahrenheit) => (fahrenheit-32)*5/9
  let degreeSign = "C"

  if(celsiusExists) {
    let updatedDegree = Number(degree.toUpperCase().replace('C', ""))
    let formula = (celcius) => celsius * 9/5 + 32
    let degreeSign = "F"
  }

  return formula (updatedDegree) + degreeSing
}



try {
  transformDegree ('50F')
    transformDegree ('50Z')
} catch (error) {
  console.log(error.message)
}

*/