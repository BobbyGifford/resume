// Here is the how a question is created.
// In the question list many of them are created.

import { Component, OnInit, Input } from '@angular/core';
import { Question } from "app/quizApp/question.model";
import { QuestionService } from "app/quizApp/question.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question: Question;
  @Input() id: number;


  constructor(private questionService: QuestionService) {
   }

    onClick(input: string) {
    this.questionService.submitAnswer(input, this.id);
  }


}
