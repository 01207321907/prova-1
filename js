// Captura todos os botões "Aperte esse botão se você está feliz agora"
const botao = document.querySelectorAll('Botão da felicidade.');

// Variável para armazenar a contagem de cliques do botão da felicidade
let felicidadeCount = 0;

// Função para atualizar a contagem e exibir a mensagem de confirmação
function felicidade() {
  felicidadeCount++; // Incrementa a contagem do botão

  // Exibe a mensagem de confirmação com a contagem atualizada
  alert(`Você adicionou um nível de felicidade: ${felicidadeCount}`);
}




<!DOCTYPE html>
<html>
<head>
  <title>Meu E-commerce</title> <!-- Define o título da página -->
  <link rel="stylesheet" type="text/css" href="styles.css"> <!-- Importa o arquivo CSS externo -->
</head>
<body>
  <h1>Meu E-commerce</h1> <!-- Título principal da página -->

  <div id="cart">Carrinho de Compras (0)</div> <!-- Div para exibir a contagem do carrinho de compras -->

  <ul id="product-list"> <!-- Lista de produtos -->
    <li>
      <img src="produto1.jpg" alt="Produto 1"> <!-- Imagem do produto 1 -->
      <h2>Produto 1</h2> <!-- Título do produto 1 -->
      <p>R$ 19,99</p> <!-- Preço do produto 1 -->
      <button class="add-to-cart">Adicionar ao carrinho</button> <!-- Botão para adicionar o produto 1 ao carrinho -->
    </li>
    <li>
      <img src="produto2.jpg" alt="Produto 2"> <!-- Imagem do produto 2 -->
      <h2>Produto 2</h2> <!-- Título do produto 2 -->
      <p>R$ 29,99</p> <!-- Preço do produto 2 -->
      <button class="add-to-cart">Adicionar ao carrinho</button> <!-- Botão para adicionar o produto 2 ao carrinho -->
    </li>
    <li>
      <img src="produto3.jpg" alt="Produto 3"> <!-- Imagem do produto 3 -->
      <h2>Produto 3</h2> <!-- Título do produto 3 -->
      <p>R$ 39,99</p> <!-- Preço do produto 3 -->
      <button class="add-to-cart">Adicionar ao carrinho</button> <!-- Botão para adicionar o produto 3 ao carrinho -->
    </li>
  </ul>

  <script src="script.js"></script> <!-- Importa o arquivo JavaScript externo -->
</body>
</html>

