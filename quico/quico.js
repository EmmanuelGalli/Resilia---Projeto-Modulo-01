function situacao1 () {
    
    const respostaSituacao1 = Number(prompt(`Escolha alternativa 1 ou 2.`))

    if (respostaSituacao1 == 1) {
        alert("Quico sentiu o peso das bochechas!!!")
        location.replace("quicoerro1.html")
    }
    else if (respostaSituacao1 == 2) {
        alert("Quico, um playboyzinho diferenciado!")
        location.replace("quico2.html")
    } else {
        alert(`Digite somente 1 ou 2.`)
    }
}

function situacao2 () {
    
    const respostaSituacao2 = Number(prompt(`Escolha alternativa 1 ou 2.`))

    if (respostaSituacao2 == 1) {
        alert("Vacilo com papi não dá, Quico!")
        location.replace("quicoerro2.html")
    }
    else if (respostaSituacao2 == 2) {
        alert("De playboyzinho à cavalheiro. Papi Girafales também é referência!!!")
        location.replace("quico3.html")
    } else {
        alert(`Digite somente 1 ou 2.`)
    }
}

function situacao3 () {
    
    const respostaSituacao3 = Number(prompt(`Escolha alternativa 1 ou 2.`))

    if (respostaSituacao3 == 1) {
        alert("Frederico é um gentleman. Será que conquista algumas donzelas em Acapulco??!")
        location.replace("../viagemok.html")
    }
    else if (respostaSituacao3 == 2) {
        alert("De cavalheiro à ranheta. Poxa, Quico, estragar o lance da mãe não dá, né!")
        location.replace("quicoerro3.html")
    } else {
        alert(`Digite somente 1 ou 2.`)
    }
}

function voltar () {
    location.replace("../index.html");
}