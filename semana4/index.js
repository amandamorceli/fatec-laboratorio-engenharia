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
    Pessoa.call();
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
    this.getMatricula = () => {
        return this.lattes;
    };    
};
//#endregion

//#region Aluno
function Aluno() {
    Pessoa.call();
    var curso;

    this.setCurso = (aCurso) => {
        this.curso = aCurso
    };
    this.getCurso = () => {
        return curso;
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
    
        // Coleta os dados do formulário
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var dataDeNascimento = document.getElementById("datanasc").value;
        var telefoneFixo = document.getElementById("telfixo").value;
        var telefoneCelular = document.getElementById("celular").value;
        var matricula = document.getElementById("matricula").value;
    
        // Cria uma instância da classe Pessoa
        var pessoa;
    
        // Verifica se foi selecionado "Professor" ou "Aluno"
        if (document.getElementById("professor").checked) {
            pessoa = new Professor();
            pessoa.setArea(document.getElementById("area").value);
            pessoa.setLattes(document.getElementById("lattes").value);
        } else if (document.getElementById("aluno").checked) {
            pessoa = new Aluno();
            pessoa.setCurso(document.getElementById("curso").value);
        }
    
        // Preenche os dados na instância
        pessoa.setNome(nome);
        pessoa.setEmail(email);
        pessoa.setDataDeNascimento(dataDeNascimento);
        pessoa.setTelefoneFixo(telefoneFixo);
        pessoa.setTelefoneCelular(telefoneCelular);
        pessoa.setMatricula(matricula);
    
        // Exibe os dados no console ou em algum lugar
        var resultadosDiv = document.getElementById("resultados");
        resultadosDiv.innerHTML = `
            <h3>Dados Enviados:</h3>
            <p><strong>Nome:</strong> ${pessoa.getNome()}</p>
            <p><strong>Email:</strong> ${pessoa.getEmail()}</p>
            <p><strong>Data de Nascimento:</strong> ${pessoa.getDataDeNascimento()}</p>
            <p><strong>Telefone Fixo:</strong> ${pessoa.getTelefoneFixo()}</p>
            <p><strong>Telefone Celular:</strong> ${pessoa.getTelefoneCelular()}</p>
            <p><strong>Matrícula:</strong> ${pessoa.getMatricula()}</p>
            ${pessoa.getArea ? `<p><strong>Área:</strong> ${pessoa.getArea()}</p>` : ''}
            ${pessoa.getLattes ? `<p><strong>Lattes:</strong> ${pessoa.getLattes()}</p>` : ''}
            ${pessoa.getCurso ? `<p><strong>Curso:</strong> ${pessoa.getCurso()}</p>` : ''}
        `;
    });

