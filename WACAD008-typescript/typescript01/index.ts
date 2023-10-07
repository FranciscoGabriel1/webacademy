type Lembrete = {
  id: number | string;
  titulo: string;
  dataInsercao: string ;
  dataLimite?: string;
  descricao?: string;
};

let lembretes: Lembrete[] = [];
let lembreteEmEdicao: Lembrete | null = null;

function adicionarLembrete() {
  const titulo = (document.getElementById("titulo") as HTMLInputElement).value;
  const dataInsercao = (
    document.getElementById("dataInsercao") as HTMLInputElement
  ).value;
  const dataLimite = (document.getElementById("dataLimite") as HTMLInputElement)
    .value;
  const descricao = (
    document.getElementById("descricao") as HTMLTextAreaElement
  ).value;

  if (lembreteEmEdicao) {
    lembreteEmEdicao.titulo = titulo;
    lembreteEmEdicao.dataInsercao = dataInsercao;
    lembreteEmEdicao.dataLimite = dataLimite || "";
    lembreteEmEdicao.descricao = descricao || "";
    lembreteEmEdicao = null;
  } else {
    const novoLembrete: Lembrete = {
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
  (document.getElementById("titulo") as HTMLInputElement).value = "";
  (document.getElementById("dataInsercao") as HTMLInputElement).value = "";
  (document.getElementById("dataLimite") as HTMLInputElement).value = "";
  (document.getElementById("descricao") as HTMLTextAreaElement).value = "";
}
function editarLembrete(id: number) {
  let lembrete = lembretes.find((l) => l.id === id);

  if (lembrete) {
    (document.getElementById("titulo") as HTMLInputElement).value =
      lembrete.titulo;
    (document.getElementById("dataInsercao") as HTMLInputElement).value =
      lembrete.dataInsercao;

    const dataLimiteInput = document.getElementById(
      "dataLimite"
    ) as HTMLInputElement;
    dataLimiteInput.value = lembrete.dataLimite || "";

    const descricaoTextarea = document.getElementById(
      "descricao"
    ) as HTMLTextAreaElement;
    descricaoTextarea.value = lembrete.descricao || "";
    lembreteEmEdicao = lembrete;
  }
}

function apagarLembrete(id: number) {
  lembretes = lembretes.filter((l) => l.id !== id);
  atualizarListaDeLembretes();
}

document
  .getElementById("adicionar")
  ?.addEventListener("click", adicionarLembrete);

atualizarListaDeLembretes();
