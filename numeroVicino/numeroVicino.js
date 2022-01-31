$(function () {
    var random = Math.floor(Math.random() * 100);
    console.log(random);
    var valido = true;
    $("#verifica").on("click", function () {
        var player1 = Number($("#p1").val());
        var player2 = Number($("#p2").val());
        if (!player1 || !player2) {
            $("#errore").show().text("Inserire entrambi i numeri");
            valido = false;
        }
        else {
            $("#errore").hide();
        }
        if (valido) {
            $("#numRandom").text("Il numero casuale \u00E8 ".concat(random));
            if (player1 == random) {
                $("#vincitore").text("Il vincitore \u00E8 il giocatore 1");
            }
            else if (player2 == random) {
                $("#vincitore").text("Il vincitore \u00E8 il giocatore 2");
            }
            var risultato1 = 0;
            risultato1 = player1 - random;
            Math.abs(risultato1);
            var risultato2 = 0;
            risultato2 = player2 - random;
            Math.abs(risultato2);
            if (risultato1 > risultato2) {
                $("#vincitore").text("Nonostante non abbia indovinato il numero giocatore 2 \u00E8 andato pi\u00F9 vicino");
            }
            else {
                $("#vincitore").text("Nonostante non abbia indovinato il numero giocatore 1 \u00E8 andato pi\u00F9 vicino");
            }
        }
    });
});
