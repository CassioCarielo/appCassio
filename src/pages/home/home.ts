import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public jogoEmAndamento: boolean = true
  public vitoria: boolean

  public encerrarJogo(vitoria: boolean): void {
    //console.log(tipo)
    this.jogoEmAndamento = false
    this.vitoria = vitoria
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.vitoria = undefined
  }
 
}
