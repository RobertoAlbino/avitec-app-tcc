import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { API_ENDPOINT } from '../../configs/constants';
import { ApiResponse } from '../../model/api/response';
import { LoadingService } from '../utils/loading.service';

@Component({
  templateUrl: 'edicao-modal.component.html',
  styleUrls: ['./edicao-modal.component.scss'],
  selector: 'edicao-modal'
})
export class EdicaoModal {
  private server: string;
  private uri: string;
  dia: object;

  constructor(private modalController: ModalController,
    private navParams: NavParams,
    private http: HttpClient,
    private loadingService: LoadingService) {
    this.server = API_ENDPOINT;
    this.uri = 'tabelapadrao';
  }

  ionViewWillEnter() {
    this.dia = this.navParams.get('dia');
  }

  async dismiss() {
    await this.modalController.dismiss(this.dia);
  }

  salvar() {
    this.loadingService.present('Salvando suas alterações');
    this.http.put<ApiResponse>(`${this.server}${this.uri}`, this.dia).subscribe(res => {
      this.loadingService.dismiss();
      if (res.sucesso)
        this.dismiss();
    });
  }
}