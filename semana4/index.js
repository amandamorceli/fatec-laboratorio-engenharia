//#region Pessoa
function Pessoa() {
    var nome, email, dataDeNascimento, telefoneFixo, telefoneCelular, matricula;

    this.setNome = (pNome) => {
        this.nome = pNome;
      };
      this.getNome = () => {
        return this.nome;
      };

      this.setEmail = (pEmail) => {
        this.email = pEmail;
      };
      this.getEmail = () => {
        return this.email;
      };

      this.setDataDeNascimento = (pDataDeNasc) => {
        this.dataDeNascimento = pDataDeNasc;
      };
      this.getDataDeNascimento = () => {
        return this.dataDeNascimento;
      };

      this.setTelefoneFixo = (pTelefoneFixo) => {
        this.telefoneFixo = pTelefoneFixo 
      };
      this.getTelefoneFixo = () => {
        return this.telefoneFixo;
      };

      this.setTelefoneCelular = (pTelefoneCelular) => {
        this.telefoneCelular = pTelefoneCelular 
      };
      this.getTelefoneCelular = () => {
        return this.telefoneCelular;
      };

      this.setMatricula = (pMatricula) => {
        this.matricula = pMatricula 
      };
      this.getMatricula = () => {
        return this.matricula;
      };    
};
//#endregion

//#region Professor
function Professor() {
    Pessoa.call(this);
    var area, lattes;

    this.setArea = (profArea) => {
        this.area = profArea 
    };
    this.getArea = () => {
        return this.area;
    };

    this.setLattes = (profLattes) => {
        this.lattes = profLattes 
    };  
    this.getLattes = () => {
        return this.lattes;
    };    
};
//#endregion

//#region Aluno
function Aluno() {
    Pessoa.call(this);
    var curso;

    this.setCurso = (aCurso) => {
        this.curso = aCurso
    };
    this.getCurso = () => {
        return this.curso;
    };
};
//#endregion

const divProfessor = document.querySelector('.professor');
const divAluno = document.querySelector('.aluno');

document.getElementById('professor').addEventListener("change", () => {
    divAluno.style.display = 'none';
    divProfessor.style.display = 'block';
});

document.getElementById('aluno').addEventListener("change", () => {
    divProfessor.style.display = 'none';
    divAluno.style.display = 'block';
});

document.getElementById("redefinir").addEventListener("click", () => {
    location.reload();
});

document.getElementById("enviar").addEventListener("click", (event) => {
        event.preventDefault();
debugger
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var dataDeNascimento = document.getElementById("datanasc").value;
        var telefoneFixo = document.getElementById("telfixo").value;
        var telefoneCelular = document.getElementById("celular").value;
        var matricula = document.getElementById("matricula").value;
    
        var pessoaSelecionda;
    
        if (document.getElementById("professor").checked) {
            pessoaSelecionda = new Professor();
            pessoaSelecionda.setArea(document.getElementById("area").value);
            pessoaSelecionda.setLattes(document.getElementById("lattes").value);
        } else if (document.getElementById("aluno").checked) {
            pessoaSelecionda = new Aluno();
            pessoaSelecionda.setCurso(document.getElementById("curso").value);
        }

        pessoaSelecionda.setNome(nome);
        pessoaSelecionda.setEmail(email);
        pessoaSelecionda.setDataDeNascimento(dataDeNascimento);
        pessoaSelecionda.setTelefoneFixo(telefoneFixo);
        pessoaSelecionda.setTelefoneCelular(telefoneCelular);
        pessoaSelecionda.setMatricula(matricula);
    debugger
        var resultadosDiv = document.getElementById("resultado");
        resultadosDiv.innerHTML = `
            <h3>Dados Enviados:</h3>
            <p><strong>Nome:</strong> ${pessoaSelecionda.getNome()}</p>
            <p><strong>Email:</strong> ${pessoaSelecionda.getEmail()}</p>
            <p><strong>Data de Nascimento:</strong> ${pessoaSelecionda.getDataDeNascimento()}</p>
            <p><strong>Telefone Fixo:</strong> ${pessoaSelecionda.getTelefoneFixo()}</p>
            <p><strong>Telefone Celular:</strong> ${pessoaSelecionda.getTelefoneCelular()}</p>
            <p><strong>Matrícula:</strong> ${pessoaSelecionda.getMatricula()}</p>
            ${pessoaSelecionda.getArea ? `<p><strong>Área:</strong> ${pessoaSelecionda.getArea()}</p>` : ''}
            ${pessoaSelecionda.getLattes ? `<p><strong>Lattes:</strong> ${pessoaSelecionda.getLattes()}</p>` : ''}
            ${pessoaSelecionda.getCurso ? `<p><strong>Curso:</strong> ${pessoaSelecionda.getCurso()}</p>` : ''}
        `;
    });

