import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

img: string;

  constructor() { 
    this.img = '/home/bobby/Desktop/finalTest/resume/src/assets/default1.jpg';
  }

  ngOnInit() {
  }

}
