import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { API_ENDPOINT } from '../../configs/constants';
import { LoadingService } from '../utils/loading.service';
import { ApiResponse } from '../../model/api/response';
import { DateUtilsService } from '../utils/dateutils.service';

@Component({
  selector: 'app-historico-umidade',
  templateUrl: './historico-umidade.page.html',
  styleUrls: ['./historico-umidade.page.scss'],
})
export class HistoricoUmidadePage {
  private id: string;
  private server: string;
  private uri: string;
  private hasError: boolean = true;
  private historicos: Array<any>;
  private ultimo;

  constructor(
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private loadingService: LoadingService,
    private dateUtils: DateUtilsService) {
    this.server = API_ENDPOINT;
    this.uri = 'indicadores/zona/';
  }

  ionViewDidEnter() {
    this.hasError = true;
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.loadingService.present('Carregando históricos de umidade da seção selecionada');
    this.executeRequest().subscribe(res => {
      if (res.sucesso) {
        this.historicos = res.objeto;
        this.historicos.reverse();
        this.ultimo = this.historicos[0];
        this.historicos.splice(0, 1);
        this.hasError = false;
      } else {
        this.hasError = true;
      }
      this.loadingService.dismiss();
    });
  }

  executeRequest() {
    return this.http.get<ApiResponse>(`${this.server}${this.uri}${this.id}`);
  }

  doRefresh() {
    this.loadingService.present('Atualizando dados de umidade');
    this.executeRequest().subscribe(res => {
      if (res.sucesso) {
        this.historicos = res.objeto;
        this.historicos.reverse();
        this.ultimo = this.historicos[0];
        this.historicos.splice(0, 1);
        this.hasError = false;
      } else {
        this.hasError = true;
      }
      this.loadingService.dismiss();
    });
  }

  formatDate(date) {
    return this.dateUtils.formatDate(date);
  }
}
