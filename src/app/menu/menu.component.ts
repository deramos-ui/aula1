import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cont:number;
  text:string;
  constructor() { }

  ngOnInit(): void {
    this.cont = 0;
    this.text = 'ola mundo';
  }

  clicou(){
    this.cont++;
    this.text = 'clicou ' + this.cont;
  }

}
