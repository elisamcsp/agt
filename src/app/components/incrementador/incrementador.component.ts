import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress')
  txtProgress!: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange(newValue: number) {
    //let elementoHTML: any = document.getElementsByName('porcentaje')[0];
    //console.log(elementoHTML.value);

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    //elementoHTML.value = this.porcentaje;
    this.txtProgress.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor(valor: number) {
    if (
      (valor > 0 && this.porcentaje < 100) ||
      (valor < 0 && this.porcentaje > 0)
    ) {
      this.porcentaje += valor;
      this.cambioValor.emit(this.porcentaje);
    }
  }
}
