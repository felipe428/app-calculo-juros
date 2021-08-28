import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.component.html',
  styleUrls: ['./juros-composto.component.css']
})
export class JurosCompostoComponent implements OnInit {
  @Input() v: number;
  @Input() n: number;
  @Input() j: number;

  constructor() {}

  ngOnInit() {}

  calculo() {
    let list: number[] = [];
    let vf: number;
    for (let i = 1; i <= this.n; i++) {
      vf = this.v * (1 + this.j / 100) ** this.n;
      list.push(vf);
    }
    return list;
  }
}
