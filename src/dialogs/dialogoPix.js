async function dialogoPix(client, message) {
  const texto = "*Chave PIX: 99999999999*\n *ATENÇÃO:*\n*Por favor envie o comprovante para prosseguir!*";
  await client
    .sendText(message.from, texto)
    .then(async () => {
      console.log("Result: ", "result"); //retorna o objeto de sucesso
      await client.markUnseenMessage(message.from); // marca a mensagem como não vista
    })
    .catch((erro) => {
      console.error("Erro ao enviar mensagem: ", erro); //retorna o objeto de erro
    });
}

export default dialogoPix;
