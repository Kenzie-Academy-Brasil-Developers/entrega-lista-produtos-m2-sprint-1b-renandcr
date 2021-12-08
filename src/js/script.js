const ul = document.querySelector(".containerListaProdutos ul")
const spanPrice = document.getElementById("precoTotal")

// Função criar template 
function montarListaProdutos(listaProdutos) {
    ul.innerHTML = ""

    listaProdutos.forEach((produto) => {
        const li = document.createElement("li")
        const img = document.createElement("img")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const span = document.createElement("span")

        img.src = produto.img
        img.alt = produto.nome
        h3.innerText = produto.nome
        p.innerText = produto.preco
        span.innerText = produto.secao

        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(span)

        ul.appendChild(li)
    
    })
}
montarListaProdutos(produtos)


// Função que retorna somente o elemento buscado
function mostrarBusca(){
    let captura = document.querySelector(".campoBuscaPorNome").value

    const listaBusca = produtos.filter((produto) => {
        if(captura === captura.toLowerCase()){
            return produto.nome.toLowerCase() === captura
        } else if(captura === captura.toUpperCase()){
            return produto.nome.toUpperCase() === captura
        }
        else{
            return produto.nome === captura
        }
    })

    montarListaProdutos(listaBusca)
    valorTotal(listaBusca)
}
const botaoBusca = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")
botaoBusca.addEventListener("click", mostrarBusca)
    

// Função que retorna todos os elementos 
function mostrarTodos(){
    const listaTodos = produtos.filter((produto) => {
        return produto.secao === "Hortifruti", "Pão", "Leite"
    })
    montarListaProdutos(listaTodos)
    valorTotal(listaTodos)
}
const botaoTodos = document.querySelector(".estiloGeralBotoes--mostrarTodos")
botaoTodos.addEventListener("click", mostrarTodos)


// Função que retorna apenas os elementos "Hortifruti"
function filtrarPorHortifruti(){
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === "Hortifruti"
    })

    montarListaProdutos(listaHortifruti)
    valorTotal(listaHortifruti)
}
const botaoMostrarHortifruti = document.querySelector(".estiloGeralBotoes--filtrarHortifruti")
botaoMostrarHortifruti.addEventListener("click", filtrarPorHortifruti)


// Função que retorna o preço total dos elementos listados
function valorTotal(produto){
    let total = 0
    for(let i = 0; i < produto.length; i++){
        if(produto.length === 1){
            total = produto[i].preco.valueOf()
        } else{
            total += produto[i].preco.valueOf()
            console.log(total)
        }
    }
    return spanPrice.innerText = total
}
    


    
    
