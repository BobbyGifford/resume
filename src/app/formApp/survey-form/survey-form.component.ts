// ViewChild is used to get access to the template.
// The onSubmit method saves the information from the
// form to our user object.

// The FormService is injected and is used to send the 
// user object to a database using the storedSurvey()
// method created within the service.

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FormService } from "app/formApp/form-service.service";

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent{
  @ViewChild('form') surveyForm: NgForm;

  // Finished dictates when the form is hidden/completed.
  finished: boolean = false;

  constructor(private formService: FormService){}

  user = {
    source: '',
    opinion: ''
}

  onSubmit(){
    this.user.source = this.surveyForm.value.source;
    this.user.opinion = this.surveyForm.value.opinion;

    this.formService.storedSurvey(this.user).subscribe(
      (response) => console.log(response));

    this.finished = true;
  }

}
