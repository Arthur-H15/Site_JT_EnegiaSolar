import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioEmailComponent } from './formulario-email/formulario-email.component';
import { FormsModule } from '@angular/forms';
import {NgxMaskModule, } from 'ngx-mask';



@NgModule({
  declarations: [FormularioEmailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot()
    
  ],
  exports:[FormularioEmailComponent]
})
export class SharedModule { }
