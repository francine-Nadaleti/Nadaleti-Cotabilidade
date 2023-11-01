$(function () {
    var dataAtual = new Date();
    var hora = dataAtual.getHours()
    var minutos = dataAtual.getUTCMinutes()

    //Troca de mensagem e cor
    var botao = $('#botao-status')
    var manha = (hora >= 7 && minutos >= 30) && (hora <= 12)
    var tarde = (hora >= 13 && minutos >= 30) && (hora <= 18)


    if (manha || tarde) {
        botao.addClass("aberto")
        botao.html("Estamos abertos!")
    } else{
        botao.addClass("fechado")
        botao.html("Estamos fechados!")
    }
})