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
    let valorfuturo = this.valor * (this.juros / 100);
    let total = this.valor;
    for (let i = 1; i <= this.parcelas; i++) {
      list.push(Number(valorfuturo) + Number(total));
      total = Number(total) + Number(valorfuturo);
      valorfuturo = total * (this.juros / 100);
    }
    return list;
  }
}
