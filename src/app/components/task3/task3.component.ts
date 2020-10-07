import { Component, OnInit } from '@angular/core';
import { Player } from './player';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit{

  public player1: Player;
  public player2: Player;
  private inputValue: string;
  private turn: boolean = true;
  private distance: number = 20;
  private toHitPerStep: number = 0.05;
  private showErrorMsg: boolean = false;
  private result;

  constructor() { }

  ngOnInit(){
    this.player1 = {toHit: null, step: null};
    this.player2 = {toHit: null, step: null};
  }
  
  handleClick(): void{
    this.player1.toHit = null;
    this.player2.toHit = null;
    if (this.validate(this.inputValue)){
      this.initPlayers();
      this.showErrorMsg = false;
      this.getOptimalRange();
    } else this.showErrorMsg = true;
  }

  validate(value?: string): boolean{
    if (value) {
      const regexp = /^[1-2]$/i; 
      if (value.match(regexp)){
        return true ;
      } else return false;
    } 
  } 

  getRandomToHit(): number{
    return +(Math.random() * (0.3 - 0.1) + 0.1).toFixed(2)
  }

  initPlayers(): void{

    this.player1 = {toHit: this.getRandomToHit(), step: 0};
    this.player2 = {toHit: this.getRandomToHit(), step: 0};
    
    this.distance = 20;
    this.result = '';
    if (this.inputValue == '2') {
      this.turn = false;
    }    
  }
  
  checkChance(): boolean{        
    return  (this.player1.toHit + 1 - this.distance*this.toHitPerStep >= 0.75 || 
      this.player2.toHit + 1 - this.distance*this.toHitPerStep > 0.7);    
  }

  getOptimalRange(): void{
    let i = 0    
    while(i < 20 ){      
      this.distance = this.distance - 1;

      if (this.turn) {
        this.player1.step++;

        if (this.checkChance()){                          
          this.result = `Оптимальный выстрел на ${this.player1.step}-м шаге. 
          Расстояние - ${this.distance}. 
          Шанс попадания - ${this.player1.toHit + 1 - this.distance*this.toHitPerStep}`;
          break;
        }

      }  else this.player2.step++; 
      
      i++;  
      this.turn = !this.turn;           
    } 
  }

}
