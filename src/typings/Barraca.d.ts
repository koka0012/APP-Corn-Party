export default interface Barraca {
  id: number;
  nome: string;
  semestre: number;
  periodo: "Matutino" | "Vespertino" | "Noturno";
  idcurso: number;
  pagamento: string;
  cnome: string;
  nomeimagem?: string;
}
