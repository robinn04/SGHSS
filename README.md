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

*EXECUTANDO LOCALMENTE*

Antes de executar o codigo principal, tenha o MySQL Workbench 8.0 CE para criar as tabelas do banco de dados e a conexao com o servidor.
Quando for criar as tabelas do banco de dados ultize o arquivo "script criar banco de dados.txt", e copie todo o codigo dele para dentro do MySQL Workbench 8.0, 
e depois execute tudo em conjunto, assim as tabelas estaram criadas.

Instalação do node.js é crucial para conexao entre o banco de dados e o terminal. 

CLONE O ESSE REPOSITORIO:

    git clone https://github.com/robinn04/sghss-backend.git
    cd insira-seu-repositorio

INSTALE AS DEPENDENCIAS:
    
    npm init -y 
    npm install express mysql2 dotenv bcryptjs jsonwebtoken cors 

CERTIFIQUE QUE ESTEJA CONECTADO CORRETAMENTE

Verifique as informações de conexão do seu servidor do banco de dados Mysql. Para isso vá em 


*COMO RODAR O SISTEMA*

    node index.js
