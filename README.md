*SGHSS - SISTEMA DE GESTÃO HOSPITALAR E DE SERVIÇOS DE SAÚDE*

Projeto Uninter da materia dee ADS Analise e Desenvolvimento de Sistema. Feito pelo aluno Robinson Francisco Silva de Mequita com RU: 4522562

Contrução de uma RESTful para gerenciamento de hospitais, que vai permitir consultar, registrar, listar funcionarios. Dentre outras funcionalidades.

*TECNOLOGIAS USADAS*




*INSTALAÇÃO DE DEPENDENCIAS*

Por favor antes de inciar o sistema digite os seguintes comandos no terminal:
    
    npm init -y 
    npm install express mysql2 dotenv bcryptjs jsonwebtoken cors 

A primeira linha de comando cria automaticamente o arquivo package.json com as configurações padrão.

A segunda linha de comando instala as seguintes dependências:

    express: Framework para criar servidores HTTP.
    mysql2: Cliente MySQL para conectar ao banco de dados.
    dotenv: Permite usar variáveis de ambiente definidas em um arquivo .env.
    bcryptjs: Utilizado para criptografar senhas.
    jsonwebtoken: Gera e valida tokens JWT para autenticação.
    cors: Habilita requisições entre diferentes origens (Cross-Origin Resource Sharing).

*COMO RODAR O SISTEMA*

    node index.js
