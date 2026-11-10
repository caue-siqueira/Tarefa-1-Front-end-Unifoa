
const input = document.getElementById("novaTarefa");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("listaTarefas");
const contador = document.getElementById("contador");

function atualizarContador() {
    const pendentes = lista.querySelectorAll(
        "li:not(.concluida)"
    ).length;

    contador.textContent = `${pendentes} tarefas pendentes`;
}

function adicionarTarefa() {
    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const item = document.createElement("li");
    const descricao = document.createElement("span");
    const finalizar = document.createElement("button");
    const remover = document.createElement("button");

    descricao.textContent = texto;

    finalizar.textContent = "Finalizar";
    finalizar.classList.add("finalizar");

    remover.textContent = "Remover";
    remover.classList.add("remover");

    finalizar.addEventListener("click", function() {
        if (item.classList.contains("concluida")) {
            item.classList.remove("concluida");
            finalizar.textContent = "Finalizar";
        } else {
            item.classList.add("concluida");
            finalizar.textContent = "Desfazer";
        }

        atualizarContador();
    });

    remover.addEventListener("click", function() {
        item.remove();
        atualizarContador();
    });

    item.appendChild(descricao);
    item.appendChild(finalizar);
    item.appendChild(remover);

    lista.appendChild(item);

    input.value = "";
    input.focus();

    atualizarContador();
}

botao.addEventListener("click", adicionarTarefa);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});
