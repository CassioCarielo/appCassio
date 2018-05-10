import { Component, OnInit, Input } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-progresso',
  templateUrl: 'progresso.html',
})
export class ProgressoPage implements OnInit {

  public structure: number = 10;

  @Input() public progresso: number = 0

  constructor() {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ProgressoPage');
  }

  ngOnInit() {
  }

}
