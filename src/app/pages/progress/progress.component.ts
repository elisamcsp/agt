import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [],
})
export class ProgressComponent implements OnInit {
  porcentaje: number = 50;

  constructor() {}

  ngOnInit(): void {}

  incrementar() {
    if (this.porcentaje < 100) {
      this.porcentaje += 10;
    }
  }

  decrementar() {
    if (this.porcentaje > 0) {
      this.porcentaje -= 10;
    }
  }

  cambiarValor(valor: number) {
    if (
      (valor > 0 && this.porcentaje < 100) ||
      (valor < 0 && this.porcentaje > 0)
    ) {
      this.porcentaje += valor;
    }
  }
}
