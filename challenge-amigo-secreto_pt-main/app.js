let ListaNomesadicionados = [];

function adicionarNome(){
    let input = document.getElementById('amigo');
    let nome = input.value;

    if (nome !== "" && !ListaNomesadicionados.includes(nome)){
        ListaNomesadicionados.push(nome);
        atualizarLista();
        limparCampoNome();
    } else {
        alert('Nome já adicionado, digite outro nome')
    }
}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

ListaNomesadicionados.forEach(nome => {
    let item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
});
}

function limparCampoNome(){
    document.getElementById('amigo').value = "";
}

function sortearAmigo(){
    if(ListaNomesadicionados.length == 0){
        alert('Nenhum nome foi adicionado ainda, por favor adicione os nomes para sorteio');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * ListaNomesadicionados.length);
    let nomeSorteado = ListaNomesadicionados[indiceSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo Secreto ${nomeSorteado}<li>`;

    ListaNomesadicionados.splice(indiceSorteado, 1);

    if(ListaNomesadicionados.length === 0){
        alert(`O ultimo amigo sorteado é: ${nomeSorteado} . \nPortanto todos os nomes registrados foram soteados!`)
    }
}