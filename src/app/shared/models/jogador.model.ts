export class Jogador {
  id: number;
  nome: string;
  pontos: number;

  constructor(nome: string, pontos: number = 0, id: number = 0) {
    this.id = id;
    this.nome = nome;
    this.pontos = pontos;
  }
}
