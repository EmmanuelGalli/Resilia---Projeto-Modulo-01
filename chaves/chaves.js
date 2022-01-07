function situacao1 () {
    
    const respostaSituacao1 = Number(prompt(`Escolha alternativa 1 ou 2.`))

    if (respostaSituacao1 == 1) {
        alert("Chaves foi um vacilão com Nhonho.")
        location.replace("chaveserro1.html")
    }
    else if (respostaSituacao1 == 2) {
        alert("Chavinho gente boa. Deixou de ser brigão.")
        location.replace("chaves2.html")
    } else {
        alert(`Digite somente 1 ou 2.`)
    }
}

function situacao2 () {
    
    const respostaSituacao2 = Number(prompt(`Escolha alternativa 1 ou 2.`))

    if (respostaSituacao2 == 1) {
        alert("Chaves causou com o seu patrocinador. Mais um vacilo pro Chavinho.")
        location.replace("chaveserro2.html")
    }
    else if (respostaSituacao2 == 2) {
        alert("Chavinho parceiro. Não é mais aquele molecote bruto.")
        location.replace("chaves3.html")
    } else {
        alert(`Digite somente 1 ou 2.`)
    }
}

function situacao3 () {
    
    const respostaSituacao3 = Number(prompt(`Escolha alternativa 1 ou 2.`))

    if (respostaSituacao3 == 1) {
        alert("Chaves ainda é um inconsequente. Causou na vila toda.")
        location.replace("chaveserro3.html")
    }
    else if (respostaSituacao3 == 2) {
        alert("Chavinho virou um cara maneiro. Bora curtir em Acapulco!")
        location.replace("../viagemok.html")
    } else {
        alert(`Digite somente 1 ou 2.`)
    }
}

function voltar () {
    location.replace("../index.html");
}