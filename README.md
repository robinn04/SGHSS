*SGHSS - SISTEMA DE GESTÃO HOSPITALAR E DE SERVIÇOS DE SAÚDE*

Projeto Uninter da materia dee ADS Analise e Desenvolvimento de Sistema. Feito pelo aluno Robinson Francisco Silva de Mequita com RU: 4522562

Contrução de uma RESTful para gerenciamento de hospitais, que vai permitir consultar, registrar, listar funcionarios. Dentre outras funcionalidades. 
Ultilização da arquitetura MVC

*TECNOLOGIAS USADAS*

-JavaScript: linguagem principal do backend

-Node.js: ambiente de execução para JavaScript no servidor

-Express.js: framework web para criar APIs RESTful

-MySQL: banco relacional usado para armazenar dados

-mysql2: driver para conectar Node.js ao MySQL

-bcryptjs: para criptografar senhas

-jsonwebtoken (JWT): para autenticação baseada em tokens

-dotenv: para gerenciar variáveis de ambiente (como senhas e portas)

-CORS: para permitir requisições de diferentes origens (Cross-Origin Resource Sharing)

-insomnia: testar APIs RESTful

*EXECUTANDO LOCALMENTE*

Antes de executar o codigo principal, tenha o MySQL Workbench 8.0 CE para criar as tabelas do banco de dados e a conexao com o servidor.
Quando for criar as tabelas do banco de dados ultize o arquivo "script criar banco de dados.txt", e copie todo o codigo dele para dentro do MySQL Workbench 8.0, 
e depois execute tudo em conjunto, assim as tabelas estaram criadas.

Instalação do node.js é crucial para conexao entre o banco de dados e o terminal. 

CLONE ESSE REPOSITORIO:

    git clone https://github.com/robinn04/sghss-backend.git
    cd insira-seu-repositorio

INSTALE AS DEPENDENCIAS:
    
    npm init -y 
    npm install express mysql2 dotenv bcryptjs jsonwebtoken cors 

CERTIFIQUE QUE ESTEJA CONECTADO CORRETAMENTE

Verifique as informações de conexão do seu servidor do banco de dados Mysql. Para isso vá em sghss-backend
/.env altere as variaveis conforme seu banco dados local.

    DB_HOST=localhost
    DB_USER=root
    DB_PASS=root
    DB_NAME=SGHSS
    JWT_SECRET=chave_secreta

PARA INICAR 

    node index.js

*ATENÇÃO A AUTENTICAÇÃO*

O sistema feito utiliza a autenticação JWT então por isso maioria das rotas são protegidas por essa autenticação, ou seja voce precisará
criar um token de acesso atraves do sign-up e um login

*SIGN-UP E LOGIN*

A partir daqui utilize o insomnia ou postman 

REGISTRAR ADMIN: POST /api/admin/signup
   
    {
      "usuario": "admin5",
      "senha": "123456",
      "nomeAdministrador": "Robinson",
      "cpfAdministrador": "12345678901",
      "nivelAcesso": 1
    }
RESULTADO: 

    {
	    "message": "Administrador cadastrado com sucesso!"
    }

LOGIN ADMIN: POST /api/admin/login

	{
  	"usuario": "admin5",
  	"senha": "123456"
	}
RESULTADO (faça a requisição, pois token em baixo é ilustrativo): 
	
	{
		"message": "Login realizado com sucesso",
		"token":   "eyJhbGciOiJIUzI1N..."
	}

*USE O TOKEN NAS PROXIMAS NAS PROXIMAS REQUISIÇÕES*

	Authorization: Bearer INSIRA_SEU_TOKEN

*LISTA DE ENDPOINTS FEITOS*

1.0 REGISTRAR PACIENTES: POST /api/pacientes

Authorization: Bearer insira_seu_token

BODY:

	{
  	"usuario": "joaopaciente",
  	"senha": "123456",
  	"nomePaciente": "João da Silva",
  	"cpfPaciente": "12345678901",
  	"dataNascimentoPaciente": "1990-05-10",
  	"historicoClinico": "Hipertensão leve",
  	"endereco": {
			"longradouro": "Rua das Flores", 
    		"numero": "123",
    		"complemento": "Apto 2",
    		"bairro": "Centro",
    		"cidade": "Vargem Grande",
    		"estado": "MA"
 	 }
	}
RESULTADO:

	{
		"message": "Paciente cadastrado com sucesso!"
	}	
2.0 REMOVER PACIENTE POR ID: DELETE /api/pacientes/{id}

Authorization: Bearer insira_seu_token

RESULTADO:
	
	{
		"message": "Paciente removido com sucesso!"
	}
3.0 LISTAR PACIENTES: GET /api/pacientes

Authorization: Bearer insira_seu_token

RESULTADO:

	{
		"pacientes": [
			{
				"idPaciente": 1,
				"nomePaciente": "Carlos Mendes",
				"cpfPaciente": "55555555555",
				"dataNacismentoPaciente": "1990-05-10T03:00:00.000Z",
				"historicoClinico": "Hipertensão",
				"longradouro": "Rua A",
				"numero": "101",
				"complemento": "Apto 1",
				"bairro": "Centro",
				"cidade": "São Luís",
				"estado": "MA"
			},
			{
				"idPaciente": 2,
				"nomePaciente": "Fernanda Lima",
				"cpfPaciente": "66666666666",
				"dataNacismentoPaciente": "1985-08-22T03:00:00.000Z",
				"historicoClinico": "Diabetes",
				"longradouro": "Rua B",
				"numero": "202",
				"complemento": "",
				"bairro": "Renascença",
				"cidade": "Imperatriz",
				"estado": "MA"
			}
4.0 RESGISTRAR PROFISSIONAL: POST /api/funcionarios

Authorization: Bearer insira_seu_token

BODY:

	{
  	"usuario": "enfermeira",
  	"senha": "123456",
  	"nomeProfissional": "Maria Oliveira",
  	"cpfProfissional": "98765432100",
  	"cargo": "Enfermeira",
  	"horarioTrabalho": "08:00:00"
	}
RESULTADO: 
	
	{
		"message": "Funcionário cadastrado com sucesso!"
	}
5.0 DELETAR PROFISSIONAL POR ID: DELETE /api/funcionarios/{id}

Authorization: Bearer insira_seu_token

RESULTADO:

	{
		"message": "Funcionário removido com sucesso!"
	}
6.0 LISTAR FUNCIONARIOS: GET /api/funcionarios

Authorization: Bearer insira_seu_token	

RESULTADO:

	{
		"funcionarios": [
			{
				"idProfissionalSaude": 1,
				"nomeProfissional": "João Medeiros",
				"cpfProfissional": "11111111111",
				"cargo": "Clínico Geral",
				"horarioTrabalho": "08:00:00",
				"usuario": "joao.med",
				"statusLogin": 1
			},
			{
				"idProfissionalSaude": 2,
				"nomeProfissional": "Maria Lima",
				"cpfProfissional": "22222222222",
				"cargo": "Pediatra",
				"horarioTrabalho": "09:00:00",
				"usuario": "maria.med",
				"statusLogin": 1
			}
7.0 AGENDAR CONSULTA: POST /api/consultas

Authorization: Bearer insira_seu_token	

BODY:

	{
  	"Paciente_idPaciente": 5,
  	"ProfissionalSaude_idProfissionalSaude": 5,
  	"dataHoraConsulta": "2025-10-20 14:30:00",
  	"tipoConsulta": "Consulta clínica geral",
	"statusConsulta": true,
  	"observacoesConsultas": "Paciente relatou dores de cabeça recorrentes"
	}
RESULTADO: 
	
	{
		"message": "Consulta agendada com sucesso!"
	}
8.0 LISTAR CONSULTAS: GET /api/consultas/simples

Authorization: Bearer insira_seu_token

RESULTADO:

	{
		"consultas": [
			{
				"idConsulta": 1,
				"Paciente_idPaciente": 1,
				"ProfissionalSaude_idProfissionalSaude": 1,
				"dataHoraConsulta": "2025-10-01T12:00:00.000Z",
				"tipoConsulta": "Rotina",
				"statusConsulta": 1,
				"observacoesConsultas": "Paciente esta com dores nas costas"
			},
			{
				"idConsulta": 2,
				"Paciente_idPaciente": 2,
				"ProfissionalSaude_idProfissionalSaude": 2,
				"dataHoraConsulta": "2025-10-02T13:00:00.000Z",
				"tipoConsulta": "Pediatria",
				"statusConsulta": 1,
				"observacoesConsultas": "Leve incomodo na coluna"
			},
9.0 AGENDAR TELECONSULTA: POST /api/teleconsultas

Authorization: Bearer insira_seu_token

BODY:

	{
  	"Paciente_idPaciente": 5,
  	"ProfissionalSaude_idProfissionalSaude": 2,
  	"linkVideo": "https://meet.example.com/5",
  	"dataHoraTelemedicina": "2025-10-25 10:00:00",
  	"duracaoTelemedicina": "00:45:00",
  	"statusTelemedicina": true
	}

RESULTADO:

	{
		"message": "Teleconsulta agendada com sucesso!"
	}
10.0 LISTAR TELECONSULTAS: GET /api/teleconsultas/simples

Authorization: Bearer insira_seu_token

RESULTADO:

	{
		"teleconsultas": [
			{
				"idTelemedicina": 1,
				"Paciente_idPaciente": 1,
				"ProfissionalSaude_idProfissionalSaude": 1,
				"linkVideo": "https://meet.example.com/1",
				"dataHoraTelemedicina": "2025-10-01T12:00:00.000Z",
				"duracaoTelemedicina": "00:30:00",
				"statusTelemedicina": 1
			},
			{
				"idTelemedicina": 2,
				"Paciente_idPaciente": 2,
				"ProfissionalSaude_idProfissionalSaude": 2,
				"linkVideo": "https://meet.example.com/2",
				"dataHoraTelemedicina": "2025-10-02T13:00:00.000Z",
				"duracaoTelemedicina": "00:45:00",
				"statusTelemedicina": 1
			}

11.00 VERIFICAR ESTOQUES E SUPRIMENTSO: GET /api/estoques

Authorization: Bearer insira_seu_token

RESULTADO: 

	{
		"estoques": [
			{
				"idEstoque": 1,
				"ultimaAtualizacao": "2025-10-10T11:00:00.000Z",
				"suprimentos": [
					{
						"idSuprimentos": 1,
						"nomeSuprimento": "Luvas Cirúrgicas",
						"tipoSuprimento": "EPI",
						"quantidade": 500,
						"dataValidade": "2026-01-01T03:00:00.000Z"
					}
				]
			},
			{
				"idEstoque": 2,
				"ultimaAtualizacao": "2025-10-11T12:00:00.000Z",
				"suprimentos": [
					{
						"idSuprimentos": 2,
						"nomeSuprimento": "Seringas 5ml",
						"tipoSuprimento": "Hospitalar",
						"quantidade": 1000,
						"dataValidade": "2026-06-01T03:00:00.000Z"
					}
				]
			}
	








