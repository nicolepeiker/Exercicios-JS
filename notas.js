function verifica (nota) {
  
  if (nota >= 90 && nota <= 100) {
    console.log('Parabéns! Você tirou A')
  }
  else if (nota >= 80) {
    console.log('Parabéns! Você tirou B')
  }
  else if (nota >= 70) {  
      console.log('Você tirou C')
  }  
  else if (nota >= 60) {
    console.log('Você tirou D')
  }
  else if (nota < 60 && nota > 0){
      console.log('Você tirou E')
  }
  else{
    console.log("nota invalida")
  } 
}

console.log(verifica(63))
