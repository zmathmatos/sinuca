import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Jogador } from 'src/app/shared/models/jogador.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild('barChart', { static: true }) barChart!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;
  isModalOpen: boolean = false;
  novoJogador: string = '';
  addJogador: boolean = false;
  jogador: Jogador[] = [];

  constructor() { }

  ngOnInit() {
    this.inicializarChart();
  }

  ngAfterViewInit() {
    this.inicializarChart();
  }

  inicializarChart() {
    if (this.barChart) {
      this.chart = new Chart(this.barChart.nativeElement, {
        type: 'bar',
        data: {
          labels: this.jogador.map(j => j.nome),
          datasets: [{
            label: 'Pontos',
            data: this.jogador.map(j => j.pontos),
            backgroundColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6'],
            borderColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6'],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Jogador'
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Pontos'
              }
            }
          }
        }
      });
    }
  }

  atualizarChart() {
    if (this.chart) {
      this.chart.data.labels = this.jogador.map(j => j.nome);
      this.chart.data.datasets[0].data = this.jogador.map(j => j.pontos);
      this.chart.update();
    }
  }

  adicionarPontos(jogador: Jogador) {
    jogador.pontos++;
    this.atualizarChart();
  }

  removerPontos(jogador: Jogador) {
    if (jogador.pontos > 0) {
      jogador.pontos--;
      this.atualizarChart();
    }
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  adicionarJogador() {
    if (this.novoJogador.trim()) {
      const novoJogador = new Jogador(this.novoJogador.trim());
      this.jogador.push(novoJogador);
      this.novoJogador = '';
      this.atualizarChart();
    } else {
      console.log("Digite o nome do jogador!");
    }
  }

  addJogadorClicado() {
    this.addJogador = !this.addJogador;
  }
}
