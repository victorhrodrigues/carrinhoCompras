let valorTotal = 0;

function adicionar(){
    // recuperando os valores do produt0, quantidade e valor
    let produto = document.getElementById('produto').value; //devolve toda a string da tag
    let nomeProduto = produto.split('-')[0]; //split é um separador que convert string em array, sintáxe: nomeVar.split('o que você quer tirar')[posição que você quer pegar depois do caracter delimitado]
    let valorUnitario = produto.split('R$')[1]; // posição [0] -> antes da quebra. posição [1] -> depois da quebra
    let quantidadeProduto = document.getElementById('quantidade').value;
    
    //calcular o preço e o subtotal
    let preco = (quantidadeProduto) * valorUnitario;

    //adiconar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
    //atualizar valor total
    valorTotal = document.getElementById('valor-total');
    console.log(valorTotal);
}

function limpar(){
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';
}
