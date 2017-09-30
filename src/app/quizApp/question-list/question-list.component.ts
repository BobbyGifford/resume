import { Component, Input, OnInit } from '@angular/core';
import { QuestionComponent } from '.././question/question.component';
import { Question } from "app/quizApp/question.model";
import { QuestionService } from "app/quizApp/question.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit{
  pointCounter: number = this.questionService.getPointCounter();
  perfectScore = this.questionService.getPerfectScore();

  questionList: Question[]; 
  questionSub: Subscription;
  pointCounterSub: Subscription;

  perfectFinal: boolean = true;

  constructor(private questionService: QuestionService) {
   }

   ngOnInit(){
    this.questionSub = this.questionService.questionListChange.subscribe(
      (question: Question[]) => this.questionList = question)

      this.questionList = this.questionService.getQuestions();

      this.pointCounterSub = this.questionService.pointCounterChange.subscribe(
        (pointCounter) => this.pointCounter = pointCounter
      )

      this.pointCounter = this.questionService.getPointCounter();

      if(this.perfectScore == 0){
        this.pointCounter = 0;
        this.perfectFinal = false;
      }

   }


       onRefresh(){
      location.reload();
    }



ngOnDestroy() {
    this.questionSub.unsubscribe();
    this.pointCounterSub.unsubscribe();
  }

  
}
