function abrirWhatsapp() {
    var msg = document.getElementById("msg").value;
    var url = "https://wa.me/5512981021517?text=" // Seu numero
    + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
}