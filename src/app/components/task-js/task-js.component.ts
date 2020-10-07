import { Component, OnInit } from '@angular/core';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';

@Component({
  selector: 'app-task-js',
  templateUrl: './task-js.component.html',
  styleUrls: ['./task-js.component.css']
})
export class TaskJSComponent implements OnInit {
  private str1: string;
  private str2: string;

  constructor() { }
  
  makeCalc(str1, str2){
    let res=[];
    var buf; //Ostatok
    var current, length; 

    doCheck(str1,str2);
       
    for (let i = 0; i < length; i++){
        current = +str1[i]+ +str2[i];
        if (current > 10 ){
          res[res.length - 1]++;
          res.push(current - 10);
        } else res.push (current);
    }
    res.join('');   
    res+= buf;
    return res;
  }

  doCheck(str1, str2) {
    if (str1.length == str2.length)
      length = str1.length;
    else if (str1.length > str2.length) {
      length = str2.length;
      buf = str1.slice(str1.length - str2.length - 1);
    } else {
      buf = str2.slice(str2.length - str1.length - 1);
      length = str1.length;
    }    
  }

  ngOnInit() {
  }

}




let buf=''; //Ostatok
let current, length; 

function makeCalc(str1, str2){
  let res=[];
  

  doCheck(str1,str2);
  console.log(str1, str2);
  console.log(length);
  console.log(buf);
  for (let i = 0; i < length; i++){
      current = +str1[i]+ +str2[i];
      if (current > 10 ){
        res[res.length - 1]++;
        res.push(current - 10);
      } else res.push (current);
  }
  res.join('');   
  res += buf;
  return res;
}

function doCheck(str1, str2) {
  if (str1.length == str2.length)
    length = str1.length;
  else if (str1.length > str2.length) {
    length = str2.length;
    buf = str1.slice(str1.length - str2.length - 1);
  } else {
    buf = str2.slice(str2.length - str1.length - 1);
    length = str1.length;
  }    
}