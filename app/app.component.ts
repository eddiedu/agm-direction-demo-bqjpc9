import { Component } from '@angular/core'

import {timer} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Kylo Ren'

  lat: number = 24.799448
  lng: number = 120.979021

  dir = {
    origin : { lat: 24.799448, lng: 120.97922 },
    destination : { lat: 24.799524, lng: 120.95017 }
  };

  show = false;

  ngOnInit(){

    const delay = 5000; // every 1 sec
    const count = 5; // process it 5 times
    timer(delay, delay).pipe(
    take(count)).subscribe(x=>{
      this.show= !this.show;
      console.log( x + "passou aqui : " + this.show +  " : " + new Date())
      if(x===2){
          this.dir = {
            origin : { lat: 24.799448, lng: 120.97922 },
            destination : { lat: this.lat, lng: this.lng }
          };
      } else  if(x===4){
          this.dir = {
            origin : { lat: 24.799448, lng: 120.97922 },
            destination : { lat: 24.799524, lng: 120.95017 }
          };
      }

    })
  }
 

}
