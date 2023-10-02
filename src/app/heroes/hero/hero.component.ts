import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

public name: string = 'ironman';
public edad: number = 33;

get capitalizedName():string {
  return 'retur'.toUpperCase();
}

getHeroDescription():string{
  return `${this.name} - ${this.edad}`;
}

changeHero():void{
this.name = 'Spiderman';
}

changeAge(): void{
this.edad = 25;
}

resetForm():void {
  this.name = 'ironman';
  this.edad = 45;
}

}
