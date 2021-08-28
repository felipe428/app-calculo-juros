import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.component.html',
  styleUrls: ['./juros-composto.component.css']
})
export class JurosCompostoComponent implements OnInit {
  @Input() valor: number;
  @Input() parcelas: number;
  @Input() juros: number;

  constructor() {}

  ngOnInit() {}

  calculo() {
    let list: number[] = [];
    let valorfuturo: number;
    for (let i = 1; i <= this.parcelas; i++) {
      valorfuturo = this.valor * (1 + this.juros / 100) ** this.parcelas;
      list.push(valorfuturo);
    }
    return list;
  }
}
