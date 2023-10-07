var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Aluno {
    constructor(id, nome, idade, altura, peso) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}
class Turma {
    constructor() {
        this.alunos = [];
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
    getNumAlunos() {
        return this.alunos.length;
    }
    getMediaIdades() {
        const somaIdades = this.alunos.reduce((acc, aluno) => acc + aluno.idade, 0);
        return somaIdades / this.alunos.length;
    }
    getMediaAlturas() {
        const somaAlturas = this.alunos.reduce((acc, aluno) => acc + aluno.altura, 0);
        return somaAlturas / this.alunos.length;
    }
    getMediaPesos() {
        const somaPesos = this.alunos.reduce((acc, aluno) => acc + aluno.peso, 0);
        return somaPesos / this.alunos.length;
    }
    listarAlunos() {
        return this.alunos;
    }
    editarAluno(id, nome, idade, altura, peso) {
        const aluno = this.alunos.find((a) => a.id === id);
        if (aluno) {
            aluno.nome = nome;
            aluno.idade = idade;
            aluno.altura = altura;
            aluno.peso = peso;
        }
    }
    apagarAluno(id) {
        this.alunos = this.alunos.filter((a) => a.id !== id);
    }
}
const turma = new Turma();
const adicionarButton = document.getElementById("adicionar");
const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");
const numAlunosSpan = document.getElementById("numAlunos");
const mediaIdadesSpan = document.getElementById("mediaIdades");
const mediaAlturasSpan = document.getElementById("mediaAlturas");
const mediaPesosSpan = document.getElementById("mediaPesos");
const alunosList = document.getElementById("alunosList");
function atualizarEstatisticas() {
    numAlunosSpan.textContent = turma.getNumAlunos().toString();
    mediaIdadesSpan.textContent = turma.getMediaIdades().toFixed(2);
    mediaAlturasSpan.textContent = turma.getMediaAlturas().toFixed(2);
    mediaPesosSpan.textContent = turma.getMediaPesos().toFixed(2);
}
function limparCampos() {
    nomeInput.value = "";
    idadeInput.value = "";
    alturaInput.value = "";
    pesoInput.value = "";
}
function adicionarAluno() {
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
function atualizarListaAlunos() {
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
function editarAluno(id) {
    const aluno = turma.listarAlunos().find((a) => a.id === id);
    if (aluno) {
        const nome = prompt("Novo nome:", aluno.nome);
        const idade = parseFloat(prompt("Nova idade:", aluno.idade.toString()) || "0");
        const altura = parseFloat(prompt("Nova altura (em cm):", aluno.altura.toString()) || "0");
        const peso = parseFloat(prompt("Novo peso (em kg):", aluno.peso.toString()) || "0");
        if (nome !== null && !isNaN(idade) && !isNaN(altura) && !isNaN(peso)) {
            turma.editarAluno(id, nome, idade, altura, peso);
            atualizarEstatisticas();
            atualizarListaAlunos();
        }
    }
}
function apagarAluno(id) {
    if (confirm("Tem certeza de que deseja apagar este aluno?")) {
        turma.apagarAluno(id);
        atualizarEstatisticas();
        atualizarListaAlunos();
    }
}
function gerarAlunosAutomaticamente(numeroAlunos) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://randomuser.me/api/?results=${numeroAlunos}`);
            const data = yield response.json();
            const alunosGerados = data.results.map((result) => {
                const aluno = new Aluno(Date.now(), // Você pode usar um ID único, como o timestamp atual
                `${result.name.first} ${result.name.last}`, result.dob.age, result.dob.age * 2, // Exemplo: altura como o dobro da idade
                result.dob.age * 3 // Exemplo: peso como o triplo da idade
                );
                return aluno;
            });
            // Adicione os alunos à turma
            for (const aluno of alunosGerados) {
                turma.adicionarAluno(aluno);
            }
            // Atualize as estatísticas e a lista de alunos
            atualizarEstatisticas();
            atualizarListaAlunos();
        }
        catch (error) {
            console.error("Erro ao gerar alunos automaticamente:", error);
        }
    });
}
const gerarAutomaticamenteButton = document.getElementById("gerarAutomaticamente");
gerarAutomaticamenteButton.addEventListener("click", () => {
    const numeroAlunos = 20; // Defina o número de alunos a serem gerados
    gerarAlunosAutomaticamente(numeroAlunos);
});
adicionarButton.addEventListener("click", adicionarAluno);
atualizarEstatisticas();
atualizarListaAlunos();
