// hooks/useGeradorTreino.ts
export const useGeradorTreino = () => {
  return () => [
    { nome: 'Flexão', tipo: 'repeticoes', repeticoes: 10 },
    { nome: 'Prancha', tipo: 'tempo', tempo: 30 },
  ];
};
