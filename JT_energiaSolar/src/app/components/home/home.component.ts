import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('expansao', [
      state('expandido', style({ maxHeight: '1000px' })),
      state('recolhido', style({ maxHeight: '0',display:'none' })),
      transition('expandido <=> recolhido', animate('0.1s ease-out'))
    ])
  ]
})
export class HomeComponent {
  lista = [
    { 
      id: 1, 
      nome: 'Redução de custos', 
      detalhes: 'Com a instalação de um sistema de energia solar fotovoltaico você passa a economizar muito na conta de luz, podendo chegar a uma economia de até 95%', 
      expandido: false 
    },
    { 
      id: 2,
      nome: 'Valorização do seu imóvel',
      detalhes: 'A energia solar valoriza o seu imóvel na hora da venda ou locação. Essa valorização pode, inclusive, superar o valor pago no sistema.', 
      expandido: false },
    { 
      id: 3, 
      nome: 'Preservação do meio ambiente', 
      detalhes: 'A energia solar é uma fonte de energia limpa, renovável, inesgotável e está muito bem distribuída por todo o planeta.', 
      expandido: false },
    { 
      id: 4, 
      nome: 'Instalação rápida', 
      detalhes: 'Os sistemas fotovoltaicos são instalados, em média, em 5 dias. Normalmente não são feitas grandes intervenções no imóvel e não é necessário o desligamento da energia da casa por longos períodos.', 
      expandido: false },
    { 
      id: 5, 
      nome: 'Retorno de investimento', 
      detalhes: 'O sistema garante um retorno de investimento entre 4 e 6 anos. Isso significa que depois deste período, com a economia de energia elétrica proporcionada pelo sistema solar, você recupera todo o valor investido.', 
      expandido: false },
    { 
      id: 6, 
      nome: 'Sistema resistente e durável', 
      detalhes: 'Os painéis solares tem garantia de performance de 25 anos. Contudo, algumas pesquisas mostram que a durabilidade de um painel solar pode ultrapassar os 40 anos.',

      
       expandido: false }
   
  ];
  open(id:number){
    // console.log(id)
    this.lista.map(f=>{
   if(f.id!=id) f.expandido=false;
    else{f.expandido=!f.expandido}
    return f
  })
  //   console.log(this.lista)
  }
}
