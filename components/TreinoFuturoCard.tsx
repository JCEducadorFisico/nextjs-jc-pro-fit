
export default function TreinoFuturoCard({ aluno, treino }) {
  return (
    <div>
      <h4>Treino sugerido para {aluno.nome}</h4>
      <pre>{JSON.stringify(treino, null, 2)}</pre>
    </div>
  );
}
