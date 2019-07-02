import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

import { API_ENDPOINT } from '../../configs/constants';
import { ApiResponse } from '../../model/api/response';
import { LoadingService } from '../utils/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public server: string;
  public uri: string;

  constructor(
    public loadingService: LoadingService,
    public navController: NavController,
    public http: HttpClient,
    private storage: Storage,
    private router: Router) {
    this.server = API_ENDPOINT;
    this.uri = 'lotes/iniciar';
  }

  ionViewDidEnter() {
    this.storage.get('loteAtivo').then((val) => {
      if (val) {
        this.navController.navigateRoot('/dashboard');
      }
    });
  }

  verTabela() {
    this.router.navigate(['tabela-padrao', { 'canEdit': true } ]);
  }

  iniciarLote() {
    this.loadingService.present('Iniciando configuração de lote');
    this.http.post<ApiResponse>(`${this.server}${this.uri}`, {}).subscribe(res => {
      if (res.sucesso) {
        this.storage.set('loteAtivo', true);
        this.storage.set('loteId', res.objeto.id);
        this.storage.set('dataInicio', res.objeto.dataInicio);
        this.loadingService.dismiss();
        this.navController.navigateRoot('/dashboard');
      }
    });
  }

}
