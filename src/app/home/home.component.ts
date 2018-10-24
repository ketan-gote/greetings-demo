import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
 sideNavMenu: any; 	
constructor(private _router : Router) {    
 this.sideNavMenu = [{"text":"Demo","expand":false,"id":null,"leaf":false,"icon":"fa fa-align-justify","routerLink":null,"children":[{"text":"Greetings UI","expand":false,"id":"f17c9c26-28ea-49a1-92c8-22ae5d38fac5","leaf":true,"icon":"fa fa-asterisk","routerLink":"greetingsdemoapp/core/greetings-demo","children":null}]}]; }
sideNavClick(data: any) {
   if( data.children==null && data.routerLink) {
     this._router.navigate([data.routerLink]);
    }
  }
}
