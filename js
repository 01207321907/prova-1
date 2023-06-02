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


