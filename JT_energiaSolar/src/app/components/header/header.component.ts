import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu:string[]=['Home', 'contato','contato','contato']
  showMenu:boolean=true
  constructor(){
    
  }

  abrirMenu(){
    console.log("abrir",this.showMenu)
    return this.showMenu=!this.showMenu
  }

}
