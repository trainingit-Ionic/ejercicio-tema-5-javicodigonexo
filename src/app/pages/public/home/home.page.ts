import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
    user:string = null;
    pass:string = null;
    constructor(private menu: MenuController, public toastController: ToastController, public auth: AuthService, public loadingController: LoadingController)	{}

    async openFirst() {
    const loading = await this.loadingController.create({
          message: 'Cargando'
        });
        await loading.present();
        const log = this.auth.login({'username':this.user, 'password':this.pass}).subscribe(

           res => {
           loading.dismiss()
            if(res == false){
            this.loginerror()
            }else if(res == true){
                this.logincorrecto()
           }
           }
         );




    }

    async logincorrecto() {
       const toast = await  this.toastController.create({
                 message: '¡Login Correcto!',
                 duration: 2000
               });
               toast.present();
               this.menu.enable(true, 'registermenu');
               this.menu.open('registermenu');
    }
    async loginerror() {
       const toast = await  this.toastController.create({
                 message: 'Credenciales incorrectas',
                 duration: 2000
               });
               toast.present();
               this.menu.enable(false, 'registermenu');
    }

    public salir(){
        console.log("salir")
    }

}
