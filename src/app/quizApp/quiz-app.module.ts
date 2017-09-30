import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionComponent } from "app/quizApp/question/question.component";
import { QuestionListComponent } from "app/quizApp/question-list/question-list.component";
import { QuestionRouting } from "app/quizApp/question.routing";
import { PrizeComponent } from "app/quizApp/question-list/prize.component";

@NgModule({
  imports: [
    CommonModule,
    QuestionRouting
  ],
  declarations: [
    QuestionComponent,
    QuestionListComponent,
    PrizeComponent
  ],
})
export class QuizAppModule { }
