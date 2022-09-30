//Aponta para o h3 que contem o valor total.
const totalPedido = document.getElementById('total');
//Aponta para o carrinho.
const carrinho = document.querySelector('.carrinho');
//Aponta para o botão do carrinho.
const carrinhoBtn = document.querySelector('.carrinho-btn')
//Aponta para o botão de finalizar o pedido.
const btnFinalizar = document.querySelector('.finalizar-compra')

//Variavel que armazena o valor total do pedido
let total = 0;

//Funcão construtora para criar os sabores de pizza.
function Pizza (nome, valor){
    this.nome = nome;
    this.valor = valor;
}

//Pizzas criadas a partir de sua funcção construtora.
const bacon = new Pizza('Bacon', 20);
const calabresa = new Pizza('Calabresa', 21);
const portuguesa = new Pizza('Portuguesa', 22);
const xtudo = new Pizza('Xtudo', 23);

//adiciona uma div com as iformações do item escolhido ao carrinho.
function adicionaCarrinho(pizza){
    carrinho.style.display = 'flex';
    adicionaTotal(pizza.valor);

    const div = criaDiv();
    const nome = criaP(pizza.nome);
    const valor = criaP(pizza.valor);
    const btn = criaBtn(pizza.valor);

    div.appendChild(nome);
    valor.innerText = `R$${valor.innerHTML},00`;
    div.appendChild(valor);
    div.appendChild(btn);

    carrinho.appendChild(div);
}

//Fução que cria uma div.
function criaDiv(){
    const div = document.createElement('div');
    return div;
}

//Fução que cria um p.
function criaP(val){
    const p = document.createElement('p');
    p.innerHTML=val;
    return p;
}

//Fução que cria um botão para excluir a div pai.
function criaBtn(val){
    const btn = document.createElement('button')
    btn.innerText='remover';
    removeDiv(btn, val);
    return btn;
}

//Fução que remove a div pai do botão.
function removeDiv(btn, val){
    btn.addEventListener('click', function(){
        btn.parentElement.remove();
        adicionaTotal(Number(-val));
    })
}

//Função para adicionar o valor total da compra.
function adicionaTotal(val){
    total += val;
    totalPedido.innerText = `total: ${total.toFixed(2)}R$`;
    if(total == 0){
        totalPedido.style.display='none'
    }else{
        totalPedido.style.display='block'
    }
}

//Oculta o carrinho ou mostra ele.
function addCarrinho(){
    if(carrinho.style.display == 'none'){
        carrinho.style.display = 'flex';
        return;   
    }else if(carrinho.style.display == 'flex'){
        carrinho.style.display='none';
        console.log('jefkn');
        return;
    }
    carrinho.style.display = 'flex';
}
carrinhoBtn.addEventListener('click', addCarrinho);
