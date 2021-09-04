/* Buscando e contando dados em arrays

Baseado no Array de livros por Categoria abaixo, faça os seguintes desafios:

- Contar o numero de Categorias e o numero de livros em cada Categoria;
- Contar o número de autores;
- Mostrar livros do autor Augusto Coury;
- Transformar a função acima em uma função que irá receber o nome do autor e
devolver os livros desse autor.
*/

const booksByCategory = [
    { 
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


const categories = booksByCategory.length
console.log("O número de categorias é " + categories + ".")

for(let category of booksByCategory) {
    console.log("Total de livros da categoria:", category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }

    }
    console.log("O total de autores:", authors.length)
}

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
            }
        }

    
    console.log(`Livro do autor ${author}: ${books.join(", ")}`)
}


countAuthors()

booksOfAuthor("Augusto Cury")
booksOfAuthor("T. Harv Eker")