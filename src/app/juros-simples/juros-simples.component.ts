import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css']
})
export class JurosSimplesComponent implements OnInit {
  @Input() v: number;
  @Input() n: number;
  @Input() j: number;

  constructor() {}

  ngOnInit() {}

  calculo() {
    let vf: number;
    let x: number;
    for (let i = 1; i <= this.n; i++) {
      vf = this.v * (1 + (this.j / 100) * this.n);
      x = vf - this.v;
    }
    return x;
  }
}
