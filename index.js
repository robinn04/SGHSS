const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


//vai definir as rotas do administrador 
const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);
//definicao da rota paciente
const pacienteRoutes = require('./routes/pacienteRoutes');
app.use('/api/pacientes', pacienteRoutes);
// definicao rota funcionario
const funcionarioRoutes = require('./routes/funcionarioRoutes');
app.use('/api/funcionarios', funcionarioRoutes);
// definicao de rota consulta
const consultaRoutes = require('./routes/consultaRoutes');
app.use('/api/consultas', consultaRoutes);
// definciao de rota teleconsulta
const teleconsultaRoutes = require('./routes/teleconsultaRoutes');
app.use('/api/teleconsultas', teleconsultaRoutes);
// definicao da rota de estoques
const estoqueRoutes = require('./routes/estoqueRoutes');
app.use('/api/estoques', estoqueRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
