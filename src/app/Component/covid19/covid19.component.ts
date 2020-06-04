import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import { Covid19Service } from './../../Service/covid19.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {
  isLoading: boolean = false;

  constructor(private covid19Service: Covid19Service) { }

  ngAfterContentInit(): void {
    this.isLoading = true;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.pieChart();
      this.barChart();
      this.dounghnutChart();
      this.lineChart();
      this.isLoading = false;
    }, 1100);
  }

  ngOnChanges(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.pieChart();
      this.barChart();
      this.dounghnutChart();
      this.lineChart();
      this.isLoading = false;
    }, 1100);
  }

  giveRandomNumbers(min, max) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
  }

  pieChart() {
    this.covid19Service.getCovid19Data().subscribe(data => {
      const countries = data['Countries'].map(data => data.Country);
      const totalDeaths = data['Countries'].map(data => data.TotalDeaths);

      const pieChart = new Chart('pieChart', {
        type: 'pie',
        data: {
          labels: countries,
          datasets: [{
            data: totalDeaths,
            backgroundColor: countries.map(() => `rgba(${this.giveRandomNumbers(0, 255)}, ${this.giveRandomNumbers(0, 255)}, 
                                                   ${this.giveRandomNumbers(0, 255)}, 0.5)`),
            borderColor: countries.map(() => `rgba(${this.giveRandomNumbers(0, 255)}, ${this.giveRandomNumbers(0, 255)}, 
                                                   ${this.giveRandomNumbers(0, 255)}, 1)`),
            borderWidth: 1
          }]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: false
            }],
          }
        }
      });
    });
  }

  barChart() {
    this.covid19Service.getCovid19Data().subscribe(data => {
      const newConfirmed = data['Global'].NewConfirmed;
      const totalConfirmed = data['Global'].TotalConfirmed;
      const newDeaths = data['Global'].NewDeaths;
      const totalDeaths = data['Global'].TotalDeaths;
      const newRecovered = data['Global'].NewRecovered;
      const totalRecovered = data['Global'].TotalRecovered;

      const barChart = new Chart('barChart', {
        type: 'bar',
        data: {
          labels: ['newConfirmed', 'totalConfirmed', 'newDeaths', 
                   'totalDeaths', 'newRecovered', 'totalRecovered'],
          datasets: [{
            data: [newConfirmed, totalConfirmed, newDeaths, totalDeaths, newRecovered, totalRecovered],
            backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)',
                              'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)', 'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }

  dounghnutChart() {
    this.covid19Service.getCovid19Data().subscribe(data => {
      const totalRecovered = data['Global'].TotalRecovered;
      const totalConfirmed = data['Global'].TotalConfirmed;
      const totalDeaths = data['Global'].TotalDeaths;

      const dougnutChart = new Chart('doughnutChart', {
        type: 'doughnut',
        data: {
          labels: ['totalRecovered', 'totalConfirmed', 'totalDeaths'],
          datasets: [
            {
              data: [totalRecovered, totalConfirmed, totalDeaths],
              backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 99, 132, 0.5)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)'],
              borderWidth: 1
            }
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: false
            }],
          }
        }
      });
    });
  }

  lineChart() {
    this.covid19Service.getMoroccoCovid19Data().subscribe(data => {
      const confirmed = data.map(({ Confirmed }) => Confirmed);
      const dates: Date = data.map(({ Date }) => Date);

      const lineChart = new Chart('lineChart', {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              data: confirmed,
              borderColor: "#ff0000",
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
}
