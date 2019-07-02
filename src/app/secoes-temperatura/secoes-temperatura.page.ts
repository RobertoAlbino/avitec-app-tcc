import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { API_ENDPOINT } from '../../configs/constants';
import { LoadingService } from '../utils/loading.service';
import { NavController } from '@ionic/angular';
import { ApiResponse } from '../../model/api/response';
import { DateUtilsService } from '../utils/dateutils.service';
import { SortService } from '../utils/sort.service';

@Component({
  selector: 'app-secoes-temperatura',
  templateUrl: './secoes-temperatura.page.html',
  styleUrls: ['./secoes-temperatura.page.scss'],
})
export class SecoesTemperaturaPage {
  private server: string;
  private uri: string;
  public dados: Array<any>;

  constructor(public http: HttpClient, 
    public navCtrl: NavController, 
    public loadingService: LoadingService, 
    public router: Router, 
    private dateUtils: DateUtilsService,
    public sortService: SortService) {
    this.server = API_ENDPOINT;
    this.uri = 'indicadores/ultimos';
  }

  ionViewDidEnter() {
    this.load();
  }

  load() {
    this.loadingService.present('Carregando dados de temperatura');
    this.executeRequest().subscribe(res => {
      if (res.sucesso) {
        this.dados = res.objeto;
        this.sortService.sortBy(this.dados, 'zona')
      }
      this.loadingService.dismiss();
    });
  }

  executeRequest() {
    return this.http.get<ApiResponse>(`${this.server}${this.uri}`);
  }

  doRefresh() {
    this.loadingService.present('Atualizando dados de temperatura');
    this.executeRequest().subscribe(res => {
      if (res.sucesso) {
        this.dados = res.objeto;
        this.sortService.sortBy(this.dados, 'zona')
      }
      this.loadingService.dismiss();
    })
  }

  verHistorico(id) {
    this.router.navigateByUrl(`/historico-temperatura/${id}`);
  }

}
