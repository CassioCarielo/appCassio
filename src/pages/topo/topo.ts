import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-topo',
  templateUrl: 'topo.html',
})
export class TopoPage {

  public titulo: string = 'Vamos aprender inglês?'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TopoPage');
  }

}
