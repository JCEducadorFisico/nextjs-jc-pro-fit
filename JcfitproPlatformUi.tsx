
// JC Fit Pro Platform - atualizado com login, dashboard e painel do coach

import { useState, useMemo } from 'react';
import jsPDF from 'jspdf';
import { useTreinos } from './hooks/useTreinos';
import { useHistorico } from './hooks/useHistorico';
import { useGraficos } from './hooks/useGraficos';
import { useGeradorTreino } from './hooks/useGeradorTreino';
import GraficoEvolucao from './components/GraficoEvolucao';
import TreinoFuturoCard from './components/TreinoFuturoCard';
import ajustesBiomecanicos from './config/ajustesBiomecanicos';
import gerarBaseDeExercicios from './utils/gerarBaseDeExercicios';

const tiposEstimulo = ['resistencia', 'forca', 'potencia', 'endurance'];

const recomendarDescanso = (nivel, pseMedio) => {
  if (nivel === 'iniciante') return pseMedio > 8 ? 2 : 1;
  if (nivel === 'intermediario') return pseMedio > 8 ? 1 : 0;
  return pseMedio > 8 ? 1 : 0;
};

const gerarDivisaoSemanal = (objetivo) => {
  const divisoes = {
    hipertrofia: ['Peito/Tríceps', 'Costas/Bíceps', 'Pernas/Ombros', 'Core/Cardio'],
    emagrecimento: ['Cardio/Fullbody', 'Pernas', 'Cardio/Funcional', 'Superior/Core'],
    condicionamento: ['Fullbody/Funcional', 'Pernas/Cardio', 'Superior/Core', 'Mobilidade'],
    fortalecimento: ['Isometria/Postural', 'Inferiores', 'Superiores', 'Core/Flexibilidade'],
  };
  return divisoes[objetivo] || ['Fullbody'];
};

const definirEstimuloAtual = (cicloAtual) => tiposEstimulo[cicloAtual % tiposEstimulo.length];

const gerarProgressoAutomatico = (historico, nivel, objetivo) => {
  const pseMedia =
    historico.reduce((acc, s) => acc + (s.pse || 0), 0) / (historico.length || 1);
  const ajuste = recomendarDescanso(nivel, pseMedia);

  return historico.map((sessao) => {
    return {
      ...sessao,
      exercicios: sessao.exercicios.map((ex) => {
        if (ex.tipo === 'tempo') {
          return {
            ...ex,
            tempo: ex.tempo + (pseMedia < 6 ? 10 : 0),
          };
        } else {
          return {
            ...ex,
            repeticoes: ex.repeticoes + (pseMedia < 6 ? 2 : 0),
          };
        }
      })
    };
  });
};

const gerarTreinoFuturo = (historico, nivel, objetivo) => {
  const novoTreino = gerarProgressoAutomatico(historico, nivel, objetivo);
  return novoTreino[novoTreino.length - 1];
};

const exportarRelatorioPdf = (aluno, relatorio) => {
  const doc = new jsPDF();
  doc.setFontSize(14);
  doc.text(`Relatório de Avaliação - ${aluno.nome}`, 10, 20);
  doc.text(`Idade: ${aluno.idade}`, 10, 30);
  doc.text(`Altura: ${aluno.altura} cm`, 10, 40);
  doc.text(`Peso: ${aluno.peso} kg`, 10, 50);
  doc.text(`IMC: ${relatorio.imc}`, 10, 60);
  doc.text('Resumo:', 10, 70);
  relatorio.resumo.forEach((item, i) => doc.text(`- ${item}`, 12, 80 + i * 10));

  if (relatorio.ajustesBiomecanicos) {
    doc.text('Ajustes Biomecânicos:', 10, 80 + relatorio.resumo.length * 10 + 10);
    relatorio.ajustesBiomecanicos.forEach((aj, i) => {
      doc.text(`- ${aj.zona.toUpperCase()}: ${aj.obs}`, 12, 80 + relatorio.resumo.length * 10 + 20 + i * 10);
    });
  }

  doc.save(`Relatorio_Avaliacao_${aluno.nome}.pdf`);
};

const Login = ({ onLogin }) => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('aluno');
  return (
    <div style={{ padding: 20 }}>
      <h2>Login JC Fit Pro</h2>
      <input placeholder="Seu nome ou e-mail" value={nome} onChange={e => setNome(e.target.value)} />
      <select value={tipo} onChange={e => setTipo(e.target.value)}>
        <option value="aluno">Aluno</option>
        <option value="coach">Coach</option>
      </select>
      <button onClick={() => onLogin({ nome, tipo })}>Entrar</button>
    </div>
  );
};

const App = () => {
  const [usuario, setUsuario] = useState(null);
  const historico = useHistorico(usuario?.nome || '');
  const dadosGrafico = useGraficos(usuario?.nome || '');

  if (!usuario) return <Login onLogin={setUsuario} />;

  return (
    <div style={{ padding: 20 }}>
      <h1>Bem-vindo, {usuario.nome}</h1>
      {usuario.tipo === 'coach' ? (
        <div>
          <p>Painel do Coach: selecione um aluno para visualizar avaliações.</p>
        </div>
      ) : (
        <div>
          <h3>Seu próximo treino:</h3>
          <TreinoFuturoCard
            aluno={usuario}
            treino={gerarTreinoFuturo(historico, usuario.nivel || 'iniciante', usuario.objetivo || 'condicionamento')}
          />
          <h3>Sua evolução:</h3>
          <GraficoEvolucao aluno={usuario} dados={dadosGrafico} />
        </div>
      )}
    </div>
  );
};

export default App;
