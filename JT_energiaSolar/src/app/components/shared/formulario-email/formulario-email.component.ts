import { CurrencyPipe } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-formulario-email',
  templateUrl: './formulario-email.component.html',
  styleUrls: ['./formulario-email.component.scss']
})
export class FormularioEmailComponent {
  
 
  showForm=false
  dadosForm = {
    nome: '',
    email: '',
    numero:'',
    conta:''
  };
  
  
abrirForm(){
  this.showForm = !this.showForm
}
formatarValorparaMoeda(valor:string){
  let valorRetorno = Number(valor.toString().replace(/\D/g, ''));
  valorRetorno = valorRetorno / 100;
  valorRetorno = parseFloat(valorRetorno.toFixed(2));
  valorRetorno = isNaN(valorRetorno) ? 0 : valorRetorno;

  
  return valorRetorno.toLocaleString('pt-br',{style:'currency',currency:'BRL'})  ;
}
inserirValorConta(){
  console.log('aqui teste')
this.dadosForm.conta=this.formatarValorparaMoeda(this?.dadosForm?.conta)
}
  onSubmit() {
    console.log(this.dadosForm);
  }

}
