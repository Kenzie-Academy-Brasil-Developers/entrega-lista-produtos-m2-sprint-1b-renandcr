const ul = document.querySelector(".containerListaProdutos ul")

function montarListaProdutos(listaProdutos){
    ul.innerText = ""
    listaProdutos.forEach((produto) => {
        // Crie os elementos
        const li = document.createElement("li")
        const img = document.createElement("img")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const span = document.createElement("span")

        // Atribua dados aos elementos
        img.src = produto.img
        img.alt = produto.nome
        h3.innerText = produto.nome
        p.innerText = produto.preco
        span.innerText = produto.secao

        // Adicione os elementos a li
        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(span)

        // Adicione os elementos ao html
        ul.appendChild(li)

    })
}

// Filtre os produtos: secao: 'Hortifruti'
function filtrarPorHortifruti(){
    const listaHorti = produtos.filter((current, index, array) => {
        return current.secao === "Hortifruti"
    })
    montarListaProdutos(listaHorti)
    calculoTotal(listaHorti)
}

const buttonHorti = document.querySelector(".estiloGeralBotoes--filtrarHortifruti")

buttonHorti.addEventListener("click", filtrarPorHortifruti)

// Mostre todos os produtos quando o botão "mostrar todos" for clicado
const filtroMostrarTodos = () => {
    const mostrarTudo = produtos.filter((current) => {
        return current
    })
    montarListaProdutos(mostrarTudo)
    calculoTotal(mostrarTudo)
}

const buttonMostrarTodos = document.querySelector(".estiloGeralBotoes--mostrarTodos")
buttonMostrarTodos.addEventListener("click", filtroMostrarTodos)

// Mostre os resultados do campo de busca
const inputValue = document.querySelector(".campoBuscaPorNome")

const mostrarBusca = () => {
    const buscaInput = inputValue.value
    console.log(buscaInput.toLowerCase())
    const filter = produtos.filter((current, index, array) => {
        if(buscaInput.toLowerCase()){
            return current.nome.toLowerCase() == buscaInput.toLowerCase()
        } else if(buscaInput.toUppercase()){
            return current.nome.toUpperCase == buscaInput.toUpperCase()
        } 
        
    })
    montarListaProdutos(filter)
    calculoTotal(filter)
}

const ButtonBuscaNome = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")
ButtonBuscaNome.addEventListener("click", mostrarBusca)

// Calcule o preço total dos itens mostrados na tela e retorne o total
const spanPrice = document.querySelector("#precoTotal")

const calculoTotal = (objetoDados) => {
    let resultado = 0
    const filter = objetoDados.filter((current, index, array) => {
        spanPrice.innerText = resultado += current.preco
    })
}

