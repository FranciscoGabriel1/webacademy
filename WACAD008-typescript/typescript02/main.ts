class Aluno {
  constructor(
    public id: number,
    public nome: string,
    public idade: number,
    public altura: number,
    public peso: number
  ) {}
}

class Turma {
  private alunos: Aluno[] = [];

  adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
  }

  getNumAlunos(): number {
    return this.alunos.length;
  }

  getMediaIdades(): number {
    const somaIdades = this.alunos.reduce((acc, aluno) => acc + aluno.idade, 0);
    return somaIdades / this.alunos.length;
  }

  getMediaAlturas(): number {
    const somaAlturas = this.alunos.reduce(
      (acc, aluno) => acc + aluno.altura,
      0
    );
    return somaAlturas / this.alunos.length;
  }

  getMediaPesos(): number {
    const somaPesos = this.alunos.reduce((acc, aluno) => acc + aluno.peso, 0);
    return somaPesos / this.alunos.length;
  }

  listarAlunos(): Aluno[] {
    return this.alunos;
  }

  editarAluno(
    id: number,
    nome: string,
    idade: number,
    altura: number,
    peso: number
  ): void {
    const aluno = this.alunos.find((a) => a.id === id);
    if (aluno) {
      aluno.nome = nome;
      aluno.idade = idade;
      aluno.altura = altura;
      aluno.peso = peso;
    }
  }

  apagarAluno(id: number): void {
    this.alunos = this.alunos.filter((a) => a.id !== id);
  }
}

const turma = new Turma();

const adicionarButton = document.getElementById(
  "adicionar"
) as HTMLButtonElement;
const nomeInput = document.getElementById("nome") as HTMLInputElement;
const idadeInput = document.getElementById("idade") as HTMLInputElement;
const alturaInput = document.getElementById("altura") as HTMLInputElement;
const pesoInput = document.getElementById("peso") as HTMLInputElement;
const numAlunosSpan = document.getElementById("numAlunos") as HTMLSpanElement;
const mediaIdadesSpan = document.getElementById(
  "mediaIdades"
) as HTMLSpanElement;
const mediaAlturasSpan = document.getElementById(
  "mediaAlturas"
) as HTMLSpanElement;
const mediaPesosSpan = document.getElementById("mediaPesos") as HTMLSpanElement;
const alunosList = document.getElementById(
  "alunosList"
) as HTMLTableSectionElement;

function atualizarEstatisticas(): void {
  numAlunosSpan.textContent = turma.getNumAlunos().toString();
  mediaIdadesSpan.textContent = turma.getMediaIdades().toFixed(2);
  mediaAlturasSpan.textContent = turma.getMediaAlturas().toFixed(2);
  mediaPesosSpan.textContent = turma.getMediaPesos().toFixed(2);
}

function limparCampos(): void {
  nomeInput.value = "";
  idadeInput.value = "";
  alturaInput.value = "";
  pesoInput.value = "";
}

function adicionarAluno(): void {
  const nome = nomeInput.value;
  const idade = parseFloat(idadeInput.value);
  const altura = parseFloat(alturaInput.value);
  const peso = parseFloat(pesoInput.value);

  if (nome && !isNaN(idade) && !isNaN(altura) && !isNaN(peso)) {
    const aluno = new Aluno(Date.now(), nome, idade, altura, peso);
    turma.adicionarAluno(aluno);
    atualizarEstatisticas();
    limparCampos();
    atualizarListaAlunos();
  }
}

function atualizarListaAlunos(): void {
  alunosList.innerHTML = "";

  const alunos = turma.listarAlunos();

  for (const aluno of alunos) {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${aluno.id}</td>
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.altura}</td>
            <td>${aluno.peso}</td>
            <td>
                <button onclick="editarAluno(${aluno.id})" class="btn btn-primary">Editar</button>
                <button onclick="apagarAluno(${aluno.id})" class="btn btn-danger">Apagar</button>
            </td>
        `;
    alunosList.appendChild(row);
  }
}

function editarAluno(id: number): void {
  const aluno = turma.listarAlunos().find((a) => a.id === id);

  if (aluno) {
    const nome = prompt("Novo nome:", aluno.nome);
    const idade = parseFloat(
      prompt("Nova idade:", aluno.idade.toString()) || "0"
    );
    const altura = parseFloat(
      prompt("Nova altura (em cm):", aluno.altura.toString()) || "0"
    );
    const peso = parseFloat(
      prompt("Novo peso (em kg):", aluno.peso.toString()) || "0"
    );

    if (nome !== null && !isNaN(idade) && !isNaN(altura) && !isNaN(peso)) {
      turma.editarAluno(id, nome, idade, altura, peso);
      atualizarEstatisticas();
      atualizarListaAlunos();
    }
  }
}

function apagarAluno(id: number): void {
  if (confirm("Tem certeza de que deseja apagar este aluno?")) {
    turma.apagarAluno(id);
    atualizarEstatisticas();
    atualizarListaAlunos();
  }
}

async function gerarAlunosAutomaticamente(numeroAlunos: number) {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${numeroAlunos}`);
        const data = await response.json();

        const alunosGerados = data.results.map((result: any) => {
            const aluno = new Aluno(
                Date.now(), 
                `${result.name.first} ${result.name.last}`,
                result.dob.age,
                result.dob.age * 2,
                result.dob.age * 3 
            );
            return aluno;
        });

      
        for (const aluno of alunosGerados) {
            turma.adicionarAluno(aluno);
        }

     
        atualizarEstatisticas();
        atualizarListaAlunos();
    } catch (error) {
        console.error("Erro ao gerar alunos automaticamente:", error);
    }
}

const gerarAutomaticamenteButton = document.getElementById("gerarAutomaticamente") as HTMLButtonElement;
gerarAutomaticamenteButton.addEventListener("click", () => {
    const numeroAlunos = 30;
    gerarAlunosAutomaticamente(numeroAlunos);
});


//@ts-ignore
adicionarButton.addEventListener("click", adicionarAluno);
atualizarEstatisticas();
atualizarListaAlunos();
