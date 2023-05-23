import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-calculadora',
  templateUrl: './mini-calculadora.component.html',
  styleUrls: ['./mini-calculadora.component.css']
})
export class MiniCalculadoraComponent {
  num1:number = 0;
  num2:number = 0;
  result:number = 0;
  resultados:number[] = [];
  historial:boolean = false;

  sumar():void {
    this.result = this.num1 + this.num2;
    if(this.resultados.length < 3){
      this.resultados.push(this.result);
    }else {
      this.resultados.shift();
      this.resultados.push(this.result);
    }
    console.log(this.resultados, 'RESULTADOS')
  }

  restar():void {
    this.result = this.num1 - this.num2;
    if(this.resultados.length < 3){
      this.resultados.push(this.result);
    }else {
      this.resultados.shift();
      this.resultados.push(this.result);
    }
  }

  multiplicar():void {
    this.result = this.num1 * this.num2;
    if(this.resultados.length < 3){
      this.resultados.push(this.result);
    }else {
      this.resultados.shift();
      this.resultados.push(this.result);
    }
  }

  dividir():void {
    this.result = this.num1 / this.num2;
    if(this.resultados.length < 3){
      this.resultados.push(this.result);
    }else {
      this.resultados.shift();
      this.resultados.push(this.result);
    }
  }

  mostrarHistorial(mostrar:boolean):void {
    this.historial = mostrar;
  }
}
