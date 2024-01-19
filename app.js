let listaNumSorteados = [];
let numeroLimite = 10;
let numeroSecreto = randomNum();
let tentativas = 1;


exibirTextoNaTela()
function textHTML(tag, texto) {
    let texts = document.querySelector(tag);
    texts.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirTextoNaTela() {
    textHTML('h1', ' Jogo de advinhação ');
    textHTML('p', ' Escolha um número de 1 a 10 ');
}

function verChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let msgTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativas = `Eba, Você descobriu o número secreto em ${tentativas} ${msgTentativa}!`;
        textHTML('h1', 'Acertou');
        textHTML('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > chute) {
            textHTML('p', ' O número é secreto é maior ');
        } else {
            textHTML('p', ' O número é secreto é menor ');
        }
        tentativas++;
        limparCampo();
    }
}

function randomNum() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista= listaNumSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaNumSorteados = [];
    }

    if (listaNumSorteados.includes(numeroEscolhido)) {
        return randomNum();
    } else {
        listaNumSorteados.push(numeroEscolhido);
        // console.log(listaNumSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = randomNum();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
