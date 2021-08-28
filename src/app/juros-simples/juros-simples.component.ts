import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css']
})
export class JurosSimplesComponent implements OnInit {
  @Input() valor: number;
  @Input() parcelas: number;
  @Input() juros: number;

  constructor() {}

  ngOnInit() {}

  calculo() {
    let list: number[] = [];
    let valorfuturo: number;
    let total: number;
    for (let i = 1; i <= this.parcelas; i++) {
      valorfuturo = this.valor * (1 + (this.juros / 100) * this.parcelas);
      total = valorfuturo - this.valor;
      list.push(total);
    }
    return list;
  }
}
