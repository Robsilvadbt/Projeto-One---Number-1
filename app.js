//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>TAREFA<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//1 Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
//2 Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
//3 Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
//4 Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

//Váriavel listaAmigos para armazenar os nomes.
let listaAmigos = [];

//Da uma função para o botão "Adcionar" cada vez que for clickado.
function adicionarAmigo() {
    let nomeDigitado = document.getElementById("amigo").value;

    //Se o nome digitado for nulo, não ter escrito nada. Exibe um alerta especificando que a caixa não pode ficar nula. 
    if (nomeDigitado === '') {
        alert("Por favor, insira um nome.");

     //Senão se o nome digitado já estiver na lista, exibi um alerta indicando-o.
    } else if (listaAmigos.includes(nomeDigitado)) {
      alert('ERRO!! Esse nome já está na lista');
      //Limpa a caixa de texto após o alerta.
      document.getElementById("amigo").value = ''; 

    } else {
     //Se as etapas acima forem concluidas, então, o nome digitado será inserido a lista.
        listaAmigos.push(nomeDigitado); 
        //Limpa a caixa de texto após o nome digitado ser inserido a lista.
        document.getElementById("amigo").value = '';
        mostrarListaNaTela();  
    }
}
//Função que mostra a lista na tela.
function mostrarListaNaTela() {
    let mostrarLista = document.getElementById("listaAmigos");
    mostrarLista.innerHTML = ''; 

    //o loop for vai percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
    for (let amigo of listaAmigos) {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        mostrarLista.appendChild(itemLista);
    }
}

//Essa função sortea um nome dos amigos da lista.
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        document.getElementById("resultado").innerHTML = "A lista de amigos está vazia!";
        return ; 
    }

    // Move as variáveis para dentro da função.
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = "O amigo sorteado foi: " + amigoSorteado;
}


//>>>>>>>>>>document.getElementById("amigo").value;<<<<<<<<<<<<<
// * Procura o que está no Id "amigo" dentro do HTML.
// * (.value) Pega o que está dentro do Id "amigo".








   

