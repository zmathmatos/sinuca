import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  chart: any;
  pontos: number = 0;

  constructor() { }

  ngOnInit() {
    this.chart = {
      type: 'BarChart',
      data: [
        ['Red', 12],
        ['Blue', 19],
        ['Yellow', 3],
        ['Green', 5],
        ['Purple', 2],
        ['Orange', 3]
      ],
      columns: ['Color', 'Votes'],
      options: {
        title: 'Votes by Color',
        width: 400,
        height: 300,
        legend: { position: 'none' },
        chartArea: { width: '50%' },
        hAxis: {
          title: 'Total Votes',
          minValue: 0
        },
        vAxis: {
          title: 'Color'
        }
      }
    };
  }

  adicionarPontos() {
    this.pontos++;
  }

  removerPontos() {
    if (this.pontos > 0) {
      this.pontos--;
    }
  }
}
