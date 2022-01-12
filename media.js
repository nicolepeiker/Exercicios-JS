let nota1 = 2
let nota2 = 8
let nota3 = undefined

function calcMedia (nota1, nota2, nota3) {
  if (nota3 == undefined ){
    nota3 = -1
  }

  if (nota1 > nota2) {
    nota2 = nota2 > nota3 ? nota2 : nota3 
  }
  else{
    nota1 = nota1 > nota3 ? nota1 : nota3
  } 
  return  (nota1 + nota2)/2
}

const media = calcMedia(nota1, nota2, nota3)

function mensagem () {
  if (media >= 6){
    console.log(`Sua media é ${media}. Você esta aprovado.`)
  }
  else if(media < 3) {
    console.log(`Sua media é ${media}. Você estesta reprovado.`)
  }
  else {
    console.log(`Sua media é ${media}. Você esta de recuperação.`)
  }
}

mensagem()

