# 🏥 SGHSS – Sistema de Gestão Hospitalar e de Serviços de Saúde
Sistema desenvolvido para a disciplina Projeto Multidisciplinar: Desenvolvimento Back-End do curso de Análise e Desenvolvimento de Sistemas – UNINTER.

👨‍💻 Autor: Robinson Francisco Silva de Mesquita <br>
🆔 RU: 4522562

# 🚀 Sobre o Projeto
O SGHSS é uma API RESTful voltada para o gerenciamento de hospitais, clínicas e serviços de saúde. Permite funcionalidades como:
Cadastro e listagem de pacientes <br>
Gerenciamento de profissionais da saúde<br>
Agendamento de consultas e teleconsultas<br>
Controle de estoques e suprimentos<br>
Autenticação via JWT<br>
Arquitetura baseada em MVC<br>

🛠️ Tecnologias Utilizadas
Tecnologia	Finalidade
JavaScript	Linguagem principal do backend
Node.js	Ambiente de execução
Express.js	Framework para APIs RESTful
MySQL	Banco de dados relacional
mysql2	Driver de conexão com MySQL
bcryptjs	Criptografia de senhas
jsonwebtoken	Autenticação com tokens
dotenv	Gerenciamento de variáveis de ambiente
CORS	Permitir requisições entre origens distintas
Insomnia	Testes de requisições HTTP
🧪 Executando Localmente
📦 Pré-requisitos
MySQL Workbench 8.0 CE

Node.js instalado

⚙️ Passo a passo
bash
# Clone o repositório
git clone https://github.com/robinn04/sghss-backend.git
cd sghss-backend

# Instale as dependências
npm init -y
npm install express mysql2 dotenv bcryptjs jsonwebtoken cors

# Configure o arquivo .env
DB_HOST=localhost
DB_USER=root
DB_PASS=root
DB_NAME=SGHSS
JWT_SECRET=chave_secreta

# Inicie o servidor
node index.js
🔐 Autenticação JWT
A maioria das rotas exige autenticação via token. Use o endpoint de sign-up e login para gerar seu token.

🔑 Registrar administrador
http
POST /api/admin/signup
json
{
  "usuario": "admin5",
  "senha": "123456",
  "nomeAdministrador": "Robinson",
  "cpfAdministrador": "12345678901",
  "nivelAcesso": 1
}
🔑 Login administrador
http
POST /api/admin/login
json
{
  "usuario": "admin5",
  "senha": "123456"
}
