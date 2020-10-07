import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {

  private result: Array<string> = [];
  private inputValue: string;
  private showErrorMsg: boolean = false;   
  
  constructor() { }
  

  handleClick(): void{
    this.result=[];
    if (this.validate(this.inputValue)){
      this.showErrorMsg = false;
      this.unloadTruck(this.inputValue);
    } else this.showErrorMsg = true;
  }

  validate(value?: string): boolean{
    if (value) {
      const regexp = /^[3-8]$/; 
      if (value.match(regexp)){
        return true ;
      } else return false;
    } 
  } 
  
  movePlates(plates: number, slotFrom: string, slotTo: string, tmpSlot: string){
    if (plates < 1) {
      return; 
    }

    this.movePlates(plates-1, slotFrom, tmpSlot, slotTo );
    this.result.push(`#${plates} ${slotFrom} --> ${slotTo}`);
    this.movePlates(plates-1, tmpSlot, slotTo, slotFrom)

  }
  
  unloadTruck(plateValue: string){
    const slotA = "SlotA";
    const slotB = "SlotB";
    const slotC = "SlotC";

    this.movePlates(parseInt(plateValue), slotA, slotC, slotB);
  }
  
}
