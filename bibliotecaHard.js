const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligencia Emocional',
    books: [
      {
        title: 'Você é insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os sete hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

const totalCategories = booksByCategory.length

console.log(`Existem ${totalCategories} categorias.`)

for (let category of booksByCategory) {
  console.log(
    `A categoria ${category.category} possui ${category.books.length} livros.`
  )
}

function countAuthors() {
  let authors = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        // Se o índice for maior ou igual ao tamanho do array, é retornado -1
        authors.push(book.author)
      }
    }
  }
  console.log(`O total de autores é: ${authors.length}.`)
}

countAuthors()

function booksOfAuthor(author) {
  let books = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }
  console.log(`Livros de ${author}: ${books.join(', ')}.`) //junta todos os elementos de um array em uma string e coloca um separador escolhido
}

booksOfAuthor('Augusto Cury')
