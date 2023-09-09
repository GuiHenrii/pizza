async function dialogo1(client, message) {
  const contato = message.from;

  const texto =
    "*Olá, Tudo bem? Sou a Bia atendente da (NOME DO ESTABELECIMENTO), vou te ajudar a realizar o seu Pedido🍕*\n------------------------------------------------------\nSelecione o numero desejado:\n\n1 - Cardápio\n2 - Promoções\n3 - Fazer o seu pedido\n4 - Pedido especial meia a meia\n5 - Falar com Nosso Atendente ou consultar pedido\n6 - Encerrar a Conversa";

  await client
    .sendText(contato, texto)
    .then(() => {
      console.log("Result: ", "result"); //return object success
    })
    .catch((erro) => {
      console.error("Erro ao enviar mensagem ", erro); //return object error
    });
}

export default dialogo1;
