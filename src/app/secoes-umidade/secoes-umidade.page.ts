import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { API_ENDPOINT } from '../../configs/constants';
import { LoadingService } from '../utils/loading.service';
import { NavController } from '@ionic/angular';
import { ApiResponse } from '../../model/api/response';
import { DateUtilsService } from '../utils/dateutils.service';
import { SortService } from '../utils/sort.service';

@Component({
  selector: 'app-secoes-umidade',
  templateUrl: './secoes-umidade.page.html',
  styleUrls: ['./secoes-umidade.page.scss'],
})
export class SecoesUmidadePage {
  private server: string;
  private uri: string;
  public dados: Array<any>;

  constructor(public http: HttpClient, 
    public navCtrl: NavController, 
    public loadingService: LoadingService, 
    private dateUtils: DateUtilsService, 
    private router: Router,
    public sortService: SortService) {
    this.server = API_ENDPOINT;
    this.uri = 'indicadores/ultimos';
   }

  ionViewDidEnter() {
    this.loadingService.present('Carregando dados de umidade');
    this.executeRequest().subscribe(res => {
      if (res.sucesso) {
        this.dados = res.objeto;
        this.sortService.sortBy(this.dados, 'zona');
      }
      this.loadingService.dismiss();
    });
  }

  executeRequest() {
    return this.http.get<ApiResponse>(`${this.server}${this.uri}`);
  }

  doRefresh() {
    this.loadingService.present('Atualizando dados de umidade');
    this.executeRequest().subscribe(res => {
      if (res.sucesso) {
        this.dados = res.objeto;
        this.sortService.sortBy(this.dados, 'zona');
      }
      this.loadingService.dismiss();
    });
  }

  verHistoricos(id) {
    this.router.navigateByUrl(`/historico-umidade/${id}`);
  }
}
