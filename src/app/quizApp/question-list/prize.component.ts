import { Component } from "@angular/core";

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
})

export class PrizeComponent {
showPrize: boolean = false;


onShowPrize(){
this.showPrize = true;
  }

}