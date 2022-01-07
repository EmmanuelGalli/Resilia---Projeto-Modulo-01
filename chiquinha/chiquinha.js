function situacao1 () {
    
    const respostaSituacao1 = Number(prompt(`Escolha alternativa 1 ou 2.`))

    if (respostaSituacao1 == 1) {
        alert("Chiquinha precisa lavar a boca com sabão!!!")
        location.replace("chiquinhaerro1.html")
    }
    else if (respostaSituacao1 == 2) {
        alert("Chiquinha tá diferente, hein????")
        location.replace("chiquinha2.html")
    } else {
        alert(`Digite somente 1 ou 2.`)
    }
}

function situacao2 () {
    
    const respostaSituacao2 = Number(prompt(`Escolha alternativa 1 ou 2.`))

    if (respostaSituacao2 == 1) {
        alert("Brilha muito, Chiquiiiiinha!!!")
        location.replace("chiquinha3.html")
    }
    else if (respostaSituacao2 == 2) {
        alert("Chiquinha não aceita desaforos, mas também perde oportunidades.")
        location.replace("chiquinhaerro2.html")
    } else {
        alert(`Digite somente 1 ou 2.`)
    }
}

function situacao3 () {
    
    const respostaSituacao3 = Number(prompt(`Escolha alternativa 1 ou 2.`))

    if (respostaSituacao3 == 1) {
        alert("Mais um golaço de Chiiiquiiinha. Rumo à Acapulco 2022!!!")
        location.replace("../viagemok.html")
    }
    else if (respostaSituacao3 == 2) {
        alert("Chiquinha agora viverá nas rodas punks, repetindo a desordenada juventude se seu pai.")
        location.replace("chiquinhaerro3.html")
    } else {
        alert(`Digite somente 1 ou 2.`)
    }
}

function voltar () {
    location.replace("../index.html");
}