import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  
  @Input() 
  pensamento:Pensamento = {
    id:4,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
  };
  constructor() {}

  larguraPensamento():string{
    if(this.pensamento.conteudo.length>=50){
      return 'pensamento-g'
    }
    return 'pensamento-p'

  }

  ngOnInit(): void {}
}
