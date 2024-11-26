function adicionar(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    
    
    console.log(`teste botão: ${quantidade}`);
    
}

function limpar(){

}


//adição de produtos na lista

//celular
let numeroCelular = 5;
let produtoCarrinho = document.getElementById('lista-produtos');
console.log(`print lista produtos:${produtoCarrinho.textContent}`/*.replace('1', numeroCelular)*/);

//quantidade de produto
let produto = produtoCarrinho.querySelector('.texto-azul');
let quantidadeProduto = 3;
produto.innerHTML = `${quantidadeProduto}x`
console.log(`print quantidade de produto: ${produto.textContent}`);

//valor de produto
let valor = produtoCarrinho.querySelector('.texto-azul:nth-of-type(2)');
console.log(`print valor de produto: ${valor.textContent}`);

// troca valor total
let valorTotal = document.getElementById('valor-total');

/*Explicação da linha de código:
1- valorTotal.textContent retorna a string R$1400
2- como desejamos obter apenas o número usamos parseInt para converter a string em número
3- como na string existem números e letras/símbolos devemos remover as letras e símbolos do vetor, utilizando replace('elemento a ser removido', 'elemento a ser colocado') 
note que como queremos apenas remover o elemento, deixamos o elemento a ser colocado em branco ('')
4- colocamos o 10 dentro de parseInt para indicar na função que estamos trabalhando com um número decimal*/
console.log(parseInt((valorTotal.textContent).replace('R$', ''), 10));

// tentativa de padroniar a atualização de valores 
let valorNovo = 2000;
valorTotal.innerHTML = `R$${valorNovo}`;
console.log(valorTotal.textContent);