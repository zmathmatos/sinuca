import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-sorteador',
  templateUrl: './sorteador.page.html',
  styleUrls: ['./sorteador.page.scss'],
})
export class SorteadorPage {
  @ViewChild('inputJogador', { static: false })
  inputJogador!: ElementRef;

  jogadores: string[] = [];
  novoJogador: string = "";
  time1: string[] = [];
  time2: string[] = [];
  timeSorteado: boolean = false;
  inputVisible: boolean = true;

  constructor() {}

  adicionarJogador() {
    if (this.novoJogador.trim()) {
      this.jogadores.push(this.novoJogador.trim());
      this.novoJogador = "";
    }
  }

  sortearTimes() {
    if (this.jogadores.length === 4) {
      alert('Somente 4 jogadores por partida.');
      return;
    }

    const jogadoresEmbaralhados = [...this.jogadores].sort(() => Math.random() - 0.5);

    const meio = Math.ceil(jogadoresEmbaralhados.length / 2);
    this.time1 = jogadoresEmbaralhados.slice(0, meio);
    this.time2 = jogadoresEmbaralhados.slice(meio);

    this.timeSorteado = true;
  }

  removerJogador(index: number) {
    const jogadorRemovido = this.jogadores[index];
    this.jogadores.splice(index, 1);

    const indexTime1 = this.time1.indexOf(jogadorRemovido);
    if (indexTime1 !== -1) {
      this.time1.splice(indexTime1, 1);
    }

    const indexTime2 = this.time2.indexOf(jogadorRemovido);
    if (indexTime2 !== -1) {
      this.time2.splice(indexTime2, 1);
    }

    if (this.time1.length < 2 || this.time2.length < 2) {
      this.timeSorteado = false;
    }
  }

  toggleInput() {
    this.inputVisible = !this.inputVisible;
    if (this.inputVisible) {
      setTimeout(() => {
        this.inputJogador.nativeElement.focus();
      }, 300); // Ajuste o tempo conforme necessário
    } else {
      this.novoJogador = '';
    }
  }
}
