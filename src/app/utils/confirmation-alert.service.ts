import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmationAlertService {

  constructor(public alertController: AlertController) { }

  async present(header: string, message: string, handler) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            handler(false);
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            handler(true);
          }
        }
      ]
    });
    alert.present();
  }
}