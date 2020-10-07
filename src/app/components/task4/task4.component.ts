import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {  
  
  private result: Array<number> = [];
  private dailyPrice: Array<number> = [];

  constructor() { }

  ngOnInit() {    
  }

  init(): void{
    this.result = [];
    this.dailyPrice = [];
    while( this.dailyPrice.reduce((acc,i) => {return acc + i}, 0) <= 55 ){
      for (let i = 0; i < 10; i++){
        this.dailyPrice[i]= Math.floor(Math.random() * 10) + 1;        
      }
    }
  }

  handleClick(): void{
    this.init();
    this.makeSpendingStrategy();
  }

  makeSpendingStrategy(): void{
    const money = [1,2,3,4,5,6,7,8,9,10];

    for (let i = 10; i >= 1; i--){
      let shift = this.dailyPrice.indexOf(i);

      while(shift != -1){
        if (this.dailyPrice.indexOf(i, shift) != -1) {
          this.result[shift] = money.pop();
          shift = this.dailyPrice.indexOf(i, shift + 1);          
        }
      }
    }
  }

}
