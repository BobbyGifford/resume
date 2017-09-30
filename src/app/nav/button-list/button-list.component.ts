// Here I use Angular's Router to power the navigation buttons
// using the .navigation() method

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.css']
})
export class ButtonListComponent implements OnInit {

  constructor(private router: Router) { }

  onHome(){
		this.router.navigate(['/home'])
	}

	onLetter(){
		this.router.navigate(['/letter'])
	}

	onAbout(){
		this.router.navigate(['/about'])
	}

	onQuiz(){
		this.router.navigate(['/quiz'])
	}

	onSurvey(){
		this.router.navigate(['/survey'])
	}

  ngOnInit() {
  }

}
