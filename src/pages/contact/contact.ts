import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public sDefaultEmail: string = 'cassiocarielo@gmail.com';

  constructor(public navCtrl: NavController) {
    
  }

}
