// This service injects HTTP from angular and creates a 
// method which uses it.

// This method, storedSurvey, saves the user object from
// the survey component to a database.

import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class FormService {

  constructor(private http: Http) { }

storedSurvey(survey: any) {
  return this.http.post('https://ng-resumesurvey.firebaseio.com/surveyInfo.json', survey);
}
}
