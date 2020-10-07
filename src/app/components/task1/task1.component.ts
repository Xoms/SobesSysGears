import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {

  private example: string = '{K: 299K, F: 79F}';
  private result: string;
  private inputValue: string;
  private showErrorMsg: boolean = false;
  
  constructor() { }
  

  handleClick(): void{
    if (this.validate(this.inputValue)){
      this.showErrorMsg = false;
      this.calculateTemperatures(this.inputValue);
    } else this.showErrorMsg = true;
  }

  validate(value?: string): boolean{
    if (value) {
      const regexp = /^\d+\.?\d+[ckf]$/i; 
      if (value.match(regexp)){
        return true ;
      } else return false;
    } 
  } 

  calculateTemperatures(value: string): void{
    let tempK: string;
    let tempC: string;
    let tempF: string;
    let tempScale: string = value[value.length - 1].toLowerCase();
    let tempNumber: number = parseFloat(value.slice(0,-1));

    switch (tempScale){
      case 'c': 
        tempK = Math.round(tempNumber + 273.15) + 'K';
        tempF = Math.round(tempNumber * 9 / 5 + 32) + 'F';
        this.result=JSON.stringify({K: tempK, F: tempF});
      break;
      
      case 'f':
        tempC = Math.round(tempNumber - 32 * 5 / 9) + 'C';
        tempK = Math.round(tempNumber - 32 * 5 / 9 + 273.15) + 'K';
        this.result=JSON.stringify({C: tempC, K: tempK});
      break;
      
      case 'k': 
        tempC = Math.round(tempNumber - 273.15) + 'C';
        tempF = Math.round(tempNumber + 32 * 5 / 9 - 273.15) + 'F';        
        this.result=JSON.stringify({C: tempC, F: tempF});
      break;     
    }
  }

}
