import { Component, Output, EventEmitter } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { Frase } from '../../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'page-painel',
  templateUrl: 'painel.html',
})
export class PainelPage {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<boolean> = new EventEmitter()

  constructor(private alertCtrl: AlertController) {
    this.atualizarRodada();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PainelPage');
  }

  public atualizaResposta(resposta: Event): void {
    //console.log( (<HTMLInputElement>resposta.target).value)
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr.toUpperCase() == this.resposta.toUpperCase())
    {
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)

      if (this.rodada === 4) {
        this.encerrarJogo.emit(true)
      }

      this.atualizarRodada();
      //console.log(this.progresso)
  }
    else
    {
      this.tentativas--
      if (this.tentativas == -1)
      {
        this.encerrarJogo.emit(false)
      }
    }

    //console.log('Verificar resposta: ', this.rodadaFrase)
  }

  public atualizarRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }

  abrirAlert() {
    let alert = this.alertCtrl.create( 
      {
        title: 'Aprendendo inglês',
        subTitle: 'Parabêns! Você ganhou!!!',
        buttons: ['Ok']
      }
    );

    alert.present();
  }
}
