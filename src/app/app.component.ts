import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:`<p>The hero's birthday is {{ birthday | date }}</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  birthday = new Date(1988, 3, 15); 
  heroes: any[] = [];
  heroes2: any[] = [];
  canFly = true;
  mutate = true;
  title= 'Heroes que vuelan';

  constructor() { this.reset();}

  addHero(name:string,birth:Date){
    name=name.trim();
    if(!name){ return;}
    let hero = {name,birth,canFly:this.canFly};
    this.heroes=this.heroes.concat(hero);
  }


  reset(){ this.heroes=[];}
}
