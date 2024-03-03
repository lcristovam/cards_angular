import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input( {required:true}   ) planType: string ='';
  @Input( {required:true }) planPrice: number =0;
  @Input({ required:true}) cardStyle: 'orange' | 'purple' = 'orange';

// Liçao de casa , o input para o style do card não aceita valor dinamico vindo do app.component , mesmo vindo como string
  @Output() buttonClickedEmittCard = new EventEmitter<void>();

  onButtonClicked(){
    this.buttonClickedEmittCard.emit()

  }

}
