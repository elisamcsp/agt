import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [],
})
export class ProgressComponent implements OnInit {
  porcentajeBarra1: number = 20;
  porcentajeBarra2: number = 60;

  constructor() {}

  ngOnInit(): void {}
}
