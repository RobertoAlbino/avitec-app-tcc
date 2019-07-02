import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  public loading: boolean = false;

  constructor(public loadingController: LoadingController) { }

  async present(message: string) {
    this.loading = true;
    const loader = await this.loadingController.create({
      message: message,
      spinner: 'crescent'
    });
    loader.present();
  }

  async dismiss() {
    this.loading = false;
    return await this.loadingController.dismiss();
  }
}