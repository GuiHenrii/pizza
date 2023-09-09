async function dialogoencerra(client, message) {
  const texto =
    "*Prezado cliente, agradecemos sua confiança e preferência. Foi um prazer atendê-lo! Esperamos revê-lo em breve para mais experiências incríveis. Atenciosamente, (nome do estabelecimento).* ";
  await client
    .sendText(message.from, texto)
    .then(() => {
      console.log("Mensagem enviada");
    })
    .catch((error) => {
      console.error("Erro ao enviar mensagem", error);
    });
}

export default dialogoencerra;
