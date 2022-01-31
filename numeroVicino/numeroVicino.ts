$(() => {
    
    let random: number = Math.floor(Math.random() * 100);
    console.log(random);

    let valido: boolean = true;

    $("#verifica").on("click", function () {
        let player1: number = Number($("#p1").val());
        let player2: number = Number($("#p2").val());
        if (!player1 || !player2) {
            $("#errore").show().text("Inserire entrambi i numeri");
            
            valido = false;
        } else {
            $("#errore").hide()
        }
        if (valido) {
            $("#numRandom").text(`Il numero casuale è ${random}`)
            if (player1 == random) {
                $("#vincitore").text(`Il vincitore è il giocatore 1`)
            } else if (player2 == random) {
                $("#vincitore").text(`Il vincitore è il giocatore 2`)
            }
            let risultato1: number = 0;
            risultato1 = player1 - random;
            Math.abs(risultato1); //Non va metodo abs
            let risultato2: number = 0;
            risultato2 = player2 - random;
            Math.abs(risultato2); //Non va metodo abs
            if (risultato1 > risultato2) {
                $("#vincitore").text(`Nonostante non abbia indovinato il numero giocatore 2 è andato più vicino`)
            } else {
                $("#vincitore").text(`Nonostante non abbia indovinato il numero giocatore 1 è andato più vicino`)
            }
        }
    });
})