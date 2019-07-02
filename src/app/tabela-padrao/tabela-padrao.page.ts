import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { API_ENDPOINT } from '../../configs/constants';
import { LoadingService } from '../utils/loading.service';
import { ApiResponse } from '../../model/api/response';
import { EdicaoModal } from '../edicao-modal/edicao-modal.component';
import { ConfirmationAlertService } from '../utils/confirmation-alert.service';

@Component({
  selector: 'app-tabela-padrao',
  templateUrl: './tabela-padrao.page.html',
  styleUrls: ['./tabela-padrao.page.scss'],
})
export class TabelaPadraoPage implements OnInit {
  private server: string;
  private uri: string;
  private dias: Array<any>;
  private canEdit: boolean;

  constructor(public modalController: ModalController, 
    private http: HttpClient, 
    private loadingService: LoadingService, 
    private activatedRoute: ActivatedRoute,
    private confirmationAlert: ConfirmationAlertService) {
    this.server = API_ENDPOINT;
    this.uri = 'tabelapadrao';
    this.activatedRoute.paramMap.subscribe(params => {
      this.canEdit = (params.get('canEdit') == 'true');
    })
  }

  ngOnInit() {
    this.loadingService.present('Carregando tabela registrada para seu aviário');
    this.http.get<ApiResponse>(`${this.server}${this.uri}`).subscribe(res => {
      if (res.sucesso) {
        this.dias = res.objeto;
      }
      this.loadingService.dismiss();
    });
  }

  voltarPadrao() {
    this.confirmationAlert.present(
      'Atenção',
      'Você tem certeza de que deseja voltar para os valores padrão?', 
      (confirm: boolean) => {
        if (confirm) 
          this.voltar();
      })
  }

  private voltar() {
    this.loadingService.present('Desfazendo alterações na tabela');
    this.http.put<ApiResponse>(`${this.server}${this.uri}/reset`, {}).subscribe(res => {
      if (res.sucesso) {
        this.dias = res.objeto;
        this.loadingService.dismiss();
      }
    });
  }

  async editar(dia) {
    if (!this.canEdit)
      return;
    const modal = await this.modalController.create({
      component: EdicaoModal,
      componentProps: {
        'dia': dia
      }
    });

    await modal.present();
  }

}
