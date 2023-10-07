var _a;
let lembretes = [];
let lembreteEmEdicao = null;
function adicionarLembrete() {
    const titulo = document.getElementById("titulo").value;
    const dataInsercao = document.getElementById("dataInsercao").value;
    const dataLimite = document.getElementById("dataLimite")
        .value;
    const descricao = document.getElementById("descricao").value;
    if (lembreteEmEdicao) {
        lembreteEmEdicao.titulo = titulo;
        lembreteEmEdicao.dataInsercao = dataInsercao;
        lembreteEmEdicao.dataLimite = dataLimite || "";
        lembreteEmEdicao.descricao = descricao || "";
        lembreteEmEdicao = null;
    }
    else {
        const novoLembrete = {
            id: Date.now(),
            titulo,
            dataInsercao,
            dataLimite: dataLimite || "",
            descricao: descricao || "",
        };
        lembretes.push(novoLembrete);
    }
    atualizarListaDeLembretes();
    limparCampos();
}
function atualizarListaDeLembretes() {
    const listaLembretes = document.getElementById("lembretes");
    if (listaLembretes) {
        listaLembretes.innerHTML = "";
        for (let lembrete of lembretes) {
            const itemLista = document.createElement("li");
            itemLista.innerHTML = `<strong>${lembrete.titulo}</strong>`;
            if (lembrete.descricao) {
                itemLista.innerHTML += `<br>${lembrete.descricao}`;
            }
            if (lembrete.dataLimite) {
                itemLista.innerHTML += `<br>Data Limite: ${lembrete.dataLimite}`;
            }
            itemLista.innerHTML += `<br>Data de Inserção: ${lembrete.dataInsercao}`;
            itemLista.innerHTML += `<br><button onclick="editarLembrete(${lembrete.id})">Editar</button>`;
            itemLista.innerHTML += `<button onclick="apagarLembrete(${lembrete.id})">Apagar</button>`;
            listaLembretes.appendChild(itemLista);
        }
    }
}
function limparCampos() {
    document.getElementById("titulo").value = "";
    document.getElementById("dataInsercao").value = "";
    document.getElementById("dataLimite").value = "";
    document.getElementById("descricao").value = "";
}
function editarLembrete(id) {
    let lembrete = lembretes.find((l) => l.id === id);
    if (lembrete) {
        document.getElementById("titulo").value =
            lembrete.titulo;
        document.getElementById("dataInsercao").value =
            lembrete.dataInsercao;
        const dataLimiteInput = document.getElementById("dataLimite");
        dataLimiteInput.value = lembrete.dataLimite || "";
        const descricaoTextarea = document.getElementById("descricao");
        descricaoTextarea.value = lembrete.descricao || "";
        lembreteEmEdicao = lembrete;
    }
}
function apagarLembrete(id) {
    lembretes = lembretes.filter((l) => l.id !== id);
    atualizarListaDeLembretes();
}
(_a = document
    .getElementById("adicionar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", adicionarLembrete);
atualizarListaDeLembretes();
