let valorTotal = 0;

limpar();

function adicionar(){
    // recuperando os valores do produt0, quantidade e valor
    let produto = document.getElementById('produto').value; //devolve toda a string da tag
    let nomeProduto = produto.split('-')[0]; //split é um separador que convert string em array, sintáxe: nomeVar.split('o que você quer tirar')[posição que você quer pegar depois do caracter delimitado]
    let valorUnitario = produto.split('R$')[1]; // posição [0] -> antes da quebra. posição [1] -> depois da quebra
    let quantidadeProduto = document.getElementById('quantidade').value;
    
    // verificação de produto é válido
    if(produto.trim() === '' || !produto){
        alert('Selecione um produto válido');
    }
   
    // verifica se a quantidade é valida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    //calcular o preço e o subtotal
    let preco = (quantidadeProduto) * valorUnitario;

    //adiconar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
    //atualizar valor total
    valorTotal = valorTotal + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = "";
}

function limpar(){
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';
    valorTotal = 0;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`
    document.getElementById('quantidade').value = "";
}
