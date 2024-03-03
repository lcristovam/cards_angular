import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  ButtonClicked(){
    console.log('button clicked')
  }
  onCardButtonClicked(){
    console.log('OnCardButtonClicked')
    //chamada HTTP
  }

  card1Values = {
    price: 100,
    type: 'Simples',
    style: "orange"
  }

  card2Values = {
    price: 200,
    type: 'Avançado',
    style: "purple"
  }
}

