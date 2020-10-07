import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  private menus: object[] = [
    { name: "Задание 1", path: "task1" },
    { name: "Задание 2", path: "task2" },
    { name: "Задание 3", path: "task3" },
    { name: "Задание 4", path: "task4" },
    { name: "Задание Epam (JS)", path: "taskJS" },
  ];

  constructor() { }
  
  ngOnInit() {
  }

}
