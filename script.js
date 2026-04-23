function abrirWhats(produto) {
  let numero = "SEU_NUMERO_AQUI"; // troque aqui

  let mensagem = `Oi, tenho interesse na ${produto}`;
  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  if (confirm("Quer falar no WhatsApp sobre esse produto?")) {
    window.open(url, "_blank");
  }
}
