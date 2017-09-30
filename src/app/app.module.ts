import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { SurveyFormComponent } from './formApp/survey-form/survey-form.component';
import { FormService } from "app/formApp/form-service.service";
import { QuestionService } from "app/quizApp/question.service";
import { CoreModule } from "app/core/core.module";
import { NavModule } from "app/nav/nav.module";

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    CoreModule,
    NavModule,
  ],
  providers: [FormService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
