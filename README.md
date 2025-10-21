# 🏥 SGHSS – Sistema de Gestão Hospitalar e de Serviços de Saúde
Sistema desenvolvido para a disciplina Projeto Multidisciplinar: Desenvolvimento Back-End do curso de Análise e Desenvolvimento de Sistemas – UNINTER.

👨‍💻 Autor: Robinson Francisco Silva de Mesquita <br>
🆔 RU: 4522562

# 🚀 Sobre o projeto
O SGHSS é uma API RESTful voltada para o gerenciamento de hospitais, clínicas e serviços de saúde. Permite funcionalidades como:

- Cadastro e listagem de pacientes <br>
- Gerenciamento de profissionais da saúde<br>
- Agendamento de consultas e teleconsultas<br>
- Controle de estoques e suprimentos<br>
- Autenticação via JWT<br>
- Arquitetura baseada em MVC<br>

# 🛠️ Tecnologias utilizadas

- JavaScript:	  Linguagem principal do backend<br>
- Node.js:	    Ambiente de execução<br>
- Express.js:   Framework para APIs RESTful<br>
- MySQL:	      Banco de dados relacional<br>
- mysql2:	      Driver de conexão com MySQL<br>
- bcryptjs:	    Criptografia de senhas<br>
- jsonwebtoken:	Autenticação com tokens<br>
- dotenv:	      Gerenciamento de variáveis de ambiente<br>
- CORS:	        Permitir requisições entre origens distintas<br>
- Insomnia:	    Testes de requisições HTTP<br>
 
# 🧪 Executando localmente
*📦 Pré-requisitos*
- MySQL Workbench 8.0 CE instalado<br>
- Node.js instalado<br>

⚠️*importante*<br>
- Antes de executar o codigo principal, recomendo usar o MySQL Workbench 8.0 CE para modelar o banco de dados com as tabelas.
- Quando for criar as tabelas do banco de dados ultize o arquivo "script criar banco de dados.txt", e copie todo o codigo dentro dele para dentro do MySQL Workbench 8.0, 
e depois execute tudo em conjunto, assim as tabelas estarão criadas.
- Instalação do framework node.js é crucial para conexao entre o banco de dados e o sistema (no terminal). 

*⚙️ Passo a passo bash*

- Clone o repositório<br>

      git clone https://github.com/robinn04/sghss-backend.git
      cd sghss-backend

- Instale as dependências<br>

      npm init -y
      npm install express mysql2 dotenv bcryptjs jsonwebtoken cors

- Configure o arquivo .env<br>

      DB_HOST=localhost
      DB_USER=root
      DB_PASS=root
      DB_NAME=SGHSS
      JWT_SECRET=chave_secreta
⚠️Verifique as informações de conexão do seu servidor do banco de dados Mysql. Para isso vá em sghss-backend
/.env altere as variaveis conforme as informações do seu banco dados local.


- Inicie o servidor

      node index.js
  
# 🔐 Autenticação JWT
*A maioria das rotas exige autenticação via token. Use o endpoint de sign-up e login para gerar seu token.*

🔑 Registrar administrador:<br>
- http
- POST /api/admin/signup
- Content-Type: application/json 
- body:
  
      {
        "usuario": "admin5",
        "senha": "123456",
        "nomeAdministrador": "Robinson",
        "cpfAdministrador": "12345678901",
        "nivelAcesso": 1
      }
- RESULTADO:
  
      {
   	    "message": "Administrador cadastrado com sucesso!"
       }
  
🔑 Login administrador:
- http
- POST /api/admin/login
- Content-Type: application/json 
- body:
  
      {
        "usuario": "admin5",
        "senha": "123456"
      }
- RESULTADO:
  
     	{
     		"message": "Login realizado com sucesso",
     		"token":   "eyJhbGciOiJIUzI1N..."
     	}

# 🚨 Lista de exemplos de endpoint feitos
-⚠️Todas as requisições protegidas devem conter o header: 

    Authorization: Bearer SEU_TOKEN

*⚡1.0 REGISTRAR PACIENTES:*
- http
- POST /api/pacientes
- Authorization: Bearer insira_seu_token
- Content-Type: application/json 
- body:
  
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
- RESULTADO:

      {
    		"message": "Paciente cadastrado com sucesso!"
    	}
*⚡2.0 REMOVER PACIENTE POR ID:*
- http
- DELETE /api/pacientes/1
- Authorization: Bearer insira_seu_token
- Content-Type: application/json 

- RESULTADO:
	
    	{
    		"message": "Paciente removido com sucesso!"
    	}
*⚡3.0 LISTAR PACIENTES:*
- http 
- GET /api/pacientes
- Authorization: Bearer insira_seu_token
- Content-Type: application/json 

- RESULTADO:

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
*⚡4.0 RESGISTRAR PROFISSIONAL:*
- http
- POST /api/funcionarios
- Authorization: Bearer insira_seu_token
- Content-Type: application/json 
- body:

      {
      	"usuario": "enfermeira",
      	"senha": "123456",
      	"nomeProfissional": "Maria Oliveira",
      	"cpfProfissional": "98765432100",
      	"cargo": "Enfermeira",
      	"horarioTrabalho": "08:00:00"
    	}
- RESULTADO: 
	
    	{
    		"message": "Funcionário cadastrado com sucesso!"
    	}
*⚡5.0 DELETAR PROFISSIONAL POR ID:*
- http
- DELETE /api/funcionarios/1
- Authorization: Bearer insira_seu_token
- Content-Type: application/json 

- RESULTADO:

    	{
    		"message": "Funcionário removido com sucesso!"
    	}
*⚡6.0 LISTAR FUNCIONARIOS:*
- http
- GET /api/funcionarios
- Authorization: Bearer insira_seu_token
- Content-Type: application/json

- RESULTADO:

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
*⚡7.0 AGENDAR CONSULTA:*
- http
- POST /api/consultas
- Authorization: Bearer insira_seu_token
- Content-Type: application/json 
- body:

      {
      	"Paciente_idPaciente": 5,
      	"ProfissionalSaude_idProfissionalSaude": 5,
      	"dataHoraConsulta": "2025-10-20 14:30:00",
      	"tipoConsulta": "Consulta clínica geral",
    	"statusConsulta": true,
      	"observacoesConsultas": "Paciente relatou dores de cabeça recorrentes"
    	}
- RESULTADO: 
	
    	{
    		"message": "Consulta agendada com sucesso!"
    	}
*⚡8.0 LISTAR CONSULTAS:*
- http
- GET /api/consultas/simples
- Authorization: Bearer insira_seu_token
- Content-Type: application/json

- RESULTADO:

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
*⚡9.0 AGENDAR TELECONSULTA:*
- http
- POST /api/teleconsultas
- Authorization: Bearer insira_seu_token
- Content-Type: application/json 
- body:

    	{
      	"Paciente_idPaciente": 5,
      	"ProfissionalSaude_idProfissionalSaude": 2,
      	"linkVideo": "https://meet.example.com/5",
      	"dataHoraTelemedicina": "2025-10-25 10:00:00",
      	"duracaoTelemedicina": "00:45:00",
      	"statusTelemedicina": true
    	}
- RESULTADO:

    	{
    		"message": "Teleconsulta agendada com sucesso!"
    	}
*⚡10 .0 LISTAR TELECONSULTAS:*
- http
- GET /api/teleconsultas/simples
- Authorization: Bearer insira_seu_token
- Content-Type: application/json

- RESULTADO:

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
*⚡11 .0 VERIFICAR ESTOQUES E SUPRIMENTOS:*
- http
- GET /api/estoques
- Authorization: Bearer insira_seu_token
- Content-Type: application/json

- RESULTADO: 

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
#💡 Resumo dos endpoints  

- POST /api/admin/signup = Cadastro de administrador do sistema. 
- POST /api/admin/login = Autenticação de administrador com geração de token JWT. 
- POST /api/pacientes = Registro de novo paciente, incluindo dados pessoais, clínicos e endereço. 
- DELETE /api/pacientes/{id} = Exclusão de paciente por ID. 
- GET /api/pacientes = Listagem de pacientes cadastrados no sistema. 
- POST /api/funcionarios = Cadastro de profissional da saúde com cargo e horário de trabalho. 
- DELETE /api/funcionarios/{id} = Exclusão de profissional da saúde por ID. 
- GET /api/funcionarios = Listagem de profissionais da saúde ativos. 
- POST /api/consultas = Agendamento de consulta presencial entre paciente e profissional. 
- GET /api/consultas/simples = Listagem simplificada de consultas agendadas. 
- POST /api/teleconsultas = Agendamento de sessão de telemedicina com link de videochamada. 
- GET /api/teleconsultas/simples = Listagem de teleconsultas realizadas ou agendadas. 
- GET /api/estoques = Consulta aos estoques hospitalares e suprimentos disponíveis. 
