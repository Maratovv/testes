

/// That's a standard fully way to create objects

var produtos = new Object();
produtos.apresentacao = 'Minha apresentacão'
produtos.trabalhos = 20;
produtos.catergorias = ['limpeza', ' alimento', ' Material de construção'];
produtos.falta = 5;
produtos.checkEmEstoque = function() {
  return this.quantidade - this.falta;
};

produtos.quantidade = 15;

//delete produtos.catergorias;

var apresentacao = $('#apresentacao').find('h2');
apresentacao.text(produtos.apresentacao);

var catergorias = $('#catergorias').find('h2');
catergorias.text(produtos.catergorias);

var estoque = $('#estoque').find('h2');
estoque.text(produtos.checkEmEstoque());





/*
//In this way objects works like functions that we can add objects later
function Deposito(name, quantidade, falta, categorias) {
    this.name = name;
    this.quantidade = quantidade;
    this.falta = falta;
    this.catergorias = ['limpeza', 'alimento', 'Material de construção'];
    this.checkEmEstoque = function() {
      return this.quantidade - this.falta;
    };
}

var lucenaseteDeposito = new Deposito('Lucena 7', 40, 10);

var details = lucenaseteDeposito.name + ' - produtos em estoque: ';
    details += lucenaseteDeposito.checkEmEstoque();

var fornecimento = document.getElementById('estoque');
fornecimento.textContent = details;
*/


/*
var deposito = {
  name: 'Lucena'
};

deposito.active = false;

var elactive = document.getElementById('estoque');
elactive.textContent = deposito.active;
*/
