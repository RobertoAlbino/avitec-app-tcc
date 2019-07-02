import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { API_ENDPOINT } from '../../configs/constants';
import { LoadingService } from '../utils/loading.service';
import { ApiResponse } from '../../model/api/response';
import { ConfirmationAlertService } from '../utils/confirmation-alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  public server: string;
  public uriDados: string;
  public uriFinalizar: string;
  private loteId: any;
  private temperaturaMedia: any;
  private umidadeMedia: any;
  private temperaturaIdeal: boolean;
  private umidadeIdeal: boolean;
  private showView: boolean = false;

  constructor(
    public http: HttpClient,
    public loadingService: LoadingService,
    public navCtrl: NavController,
    public router: Router,
    private storage: Storage,
    private confirmationAlert: ConfirmationAlertService) {
    this.server = API_ENDPOINT;
    this.uriDados = 'indicadores/media'
    this.uriFinalizar = 'lotes/finalizar';
  }

  ionViewDidEnter() {
    this.storage.get('loteId').then(val => {
      if (val)
        this.loteId = val;
    })

    this.loadingService.present('Carregando os valores médios');
    this.http.get<ApiResponse>(`${this.server}${this.uriDados}`).subscribe(res => {
      if (res.sucesso) {
        this.temperaturaMedia = res.objeto.mediaTemperatura;
        this.temperaturaIdeal = res.objeto.temperaturaIdeal;
        this.umidadeMedia = res.objeto.mediaUmidade;
        this.umidadeIdeal = res.objeto.umidadeIdeal;
        this.showView = true;
      }
      this.loadingService.dismiss();
    })
  }

  verTabela() {
    this.router.navigate(['tabela-padrao', { 'canEdit': false } ]);
  }

  encerrarLote() {
    this.confirmationAlert.present(
      'Atenção',
      'Você tem certeza de que deseja encerrar o lote?',
      (confirm: boolean) => {
        if (confirm)
          this.encerra();
      });
  }

  encerra() {
    this.loadingService.present('Finalizando lote');
    this.http.put<ApiResponse>(`${this.server}${this.uriFinalizar}`, {}).subscribe(res => {
      if (res.sucesso) {
        this.loadingService.dismiss();
        this.navCtrl.navigateRoot('/home');
        this.storage.set('loteAtivo', false);
        this.navCtrl.navigateRoot(['/resumo', { 'loteId': this.loteId || null}]);
      }
    });
  }

  verTemperatura() {
    this.router.navigateByUrl('/secoes-temperatura');
  }

  verUmidade() {
    this.router.navigateByUrl('/secoes-umidade');
  }
}
