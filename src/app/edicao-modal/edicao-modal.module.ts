import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EdicaoModal } from './edicao-modal.component';

@NgModule({
    declarations: [
        EdicaoModal
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    entryComponents: [
        EdicaoModal
    ]
})
export class EdicaoModalModule { }