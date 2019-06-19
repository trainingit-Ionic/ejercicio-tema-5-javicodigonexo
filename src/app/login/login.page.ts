import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-login',
})
export class LoginPage{

   @Input() value: number;

    constructor(navParams: NavParams) {
      // componentProps can also be accessed at construction time using NavParams
    }

}
