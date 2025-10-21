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
-Verifique as informações de conexão do seu servidor do banco de dados Mysql. Para isso vá em sghss-backend
/.env altere as variaveis conforme as informações do seu banco dados local.


- Inicie o servidor

      node index.js
  
# 🔐 Autenticação JWT
*A maioria das rotas exige autenticação via token. Use o endpoint de sign-up e login para gerar seu token.*

🔑 Registrar administrador<br>
- http
- POST /api/admin/signup
- Content-Type: application/json 
- body
  
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
  
🔑 Login administrador
- http
- POST /api/admin/login
- Content-Type: application/json 
- body
  
      {
        "usuario": "admin5",
        "senha": "123456"
      }
- RESULTADO:
  
     	{
     		"message": "Login realizado com sucesso",
     		"token":   "eyJhbGciOiJIUzI1N..."
     	}

# 🚨 Lista de endpoint feitos
-⚠️Todas as requisições protegidas devem conter o header: 

    Authorization: Bearer SEU_TOKEN



