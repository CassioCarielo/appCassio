import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from '../../shared/coracao.model'
//import { IonicPage } from 'ionic-angular';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tentativas',
  templateUrl: 'tentativas.html',
})
export class TentativasPage implements OnInit, OnChanges {

  @Input() public tentativas: number = 0

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TentativasPage');
  }

  ngOnInit() {
    
  }

  ngOnChanges() {
    if (this.tentativas != this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice -1].cheio = false
    }
  }
}
