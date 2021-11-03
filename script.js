$(function () {
    $("td").dblclick(function () {
        var conteudoOriginal = $(this).text();

        if (!$(this).hasClass("td-disabled")) { 
            $(this).addClass("celulaEmEdicao");
            $(this).html("<input type='text' class='form-control' value='" + conteudoOriginal + "' />");
            $(this).children().first().focus();

            $(this).children().first().keypress(function (e) {
                if (e.which == 13) {
                    var novoConteudo = $(this).val();
                    $(this).parent().text(novoConteudo);
                    $(this).parent().removeClass("celulaEmEdicao");
                }
            });

            $(this).children().first().blur(function(){
                $(this).parent().text(conteudoOriginal);
                $(this).parent().removeClass("celulaEmEdicao");
            });
        }
    });
});