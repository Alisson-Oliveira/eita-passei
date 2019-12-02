import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calcular',
  templateUrl: 'calcular.html',
})
export class CalcularPage {

  public situacao: boolean = false;
  public media: number = 0;

  public nota1: string;
  public nota2: string;
  public nota3: string;
  public nota4: string;

  constructor() { }

  public calcular(): void {
    this.media = (parseFloat(this.nota1) + parseFloat(this.nota2) + parseFloat(this.nota3) + parseFloat(this.nota4)) / 4.0;
    if(this.media >= 6.0){
      this.situacao = true;
    } else {
      this.situacao = false;
    }
    this.media.toFixed(2);
  }
}
