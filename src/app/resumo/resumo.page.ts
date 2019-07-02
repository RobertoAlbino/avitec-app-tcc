import { Component, ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from 'src/model/api/response';
import { API_ENDPOINT } from 'src/configs/constants';
import * as moment from 'moment';
import { LoadingService } from '../utils/loading.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.page.html',
  styleUrls: ['./resumo.page.scss'],
})
export class ResumoPage implements OnInit {

  @ViewChild('temperaturaLineCanvas') temperaturaLineCanvas: { nativeElement: any; };
  @ViewChild('umidadeLineCanvas') umidadeLineCanvas: { nativeElement: any; };

  chartTemperatura: any;
  chartUmidade: any;
  private loteId: any;
  private dataInicio: any;
  private server: string;
  private uri: string;
  private dados: Array<any>;
  private datas: Array<string>;
  private maximasTemp: Array<string>;
  private minimasTemp: Array<string>;
  private maximasUmid: Array<string>;
  private minimasUmid: Array<string>;

  private itensTabela: Array<any>;
  private limiteUmidadeMax: Array<string> = [];
  private limiteUmidadeMin: Array<string> = [];
  private limiteTemperaturaMax: Array<string> = [];
  private limiteTemperaturaMin: Array<string> = [];

  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private loadingService: LoadingService,
    private navCtrl: NavController) {
    this.datas = [];
    this.maximasTemp = [];
    this.minimasTemp = [];
    this.maximasUmid = [];
    this.minimasUmid = [];
    this.activatedRoute.paramMap.subscribe(params => {
      this.loteId = params.get('loteId');
      this.server = API_ENDPOINT;
      this.uri = `lotes/${this.loteId}/finalizar/info`;
    })
  }

  ngOnInit() {
    this.loadingService.present('Gerando o os gráficos');
    // this.http.get<ApiResponse>(`${this.server}tabelapadrao`).subscribe(res => {
    //   if (res.sucesso) {
    //     this.itensTabela = res.objeto;
    //     this.itensTabela.forEach(item => {
    //       this.limiteTemperaturaMax.push(item.temperaturaMaxima)
    //       this.limiteTemperaturaMin.push(item.temperaturaMinima)
    //       this.limiteUmidadeMax.push(item.umidadeMaxima)
    //       this.limiteUmidadeMin.push(item.umidadeMinima)

    //       this.getDados()
    //     })
    //   }
    this.getDados();

  }

  inicio() {
    this.navCtrl.navigateRoot('home');
  }

  private getDados() {
    this.http.get<ApiResponse>(`${this.server}${this.uri}`, {}).subscribe(res => {
      if (res.sucesso) {
        this.dados = res.objeto;
        if (this.dados.length == 0) {
          this.loadingService.dismiss();
          return;
        }
        this.dados.forEach(dado => {
          let dataFormatada: string = moment(dado.data, 'YYYY-MM-DD').format('DD/MM');
          this.datas.push(dataFormatada);
          this.minimasTemp.push(dado.temperaturaMinima);
          this.maximasTemp.push(dado.temperaturaMaxima);
          this.minimasUmid.push(dado.umidadeMinima);
          this.maximasUmid.push(dado.umidadeMaxima);

          this.montaGraficoTemperatura();
          this.montaGraficoUmidade();

          this.loadingService.dismiss();
        })
      }
    });
  }

  private montaGraficoTemperatura() {
    this.chartTemperatura = new Chart(this.temperaturaLineCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.datas,
        datasets: [
          {
            label: 'Máximas',
            data: this.maximasTemp,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          },
          {
            label: 'Mínimas',
            data: this.minimasTemp,
            backgroundColor: [
              'rgba(154, 208, 245, 0.2)'
              // 'rgba(54, 162, 235, 0.2)',
              // 'rgba(255, 206, 86, 0.2)',
              // 'rgba(75, 192, 192, 0.2)',
              // 'rgba(153, 102, 255, 0.2)',
              // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(54,162,235,1)'
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)',
              // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  private montaGraficoUmidade() {
    this.chartUmidade = new Chart(this.umidadeLineCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.datas,
        datasets: [
          {
            label: 'Máximas',
            data: this.maximasUmid,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          },
          {
            label: 'Mínimas',
            data: this.minimasUmid,
            backgroundColor: [
              'rgba(154, 208, 245, 0.2)'
              // 'rgba(54, 162, 235, 0.2)',
              // 'rgba(255, 206, 86, 0.2)',
              // 'rgba(75, 192, 192, 0.2)',
              // 'rgba(153, 102, 255, 0.2)',
              // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(54,162,235,1)'
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)',
              // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
