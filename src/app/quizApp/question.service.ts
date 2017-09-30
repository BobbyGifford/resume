import { Injectable } from '@angular/core';
import { Question } from "app/quizApp/question.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class QuestionService {

questionListChange = new Subject<Question[]>();
pointCounterChange = new Subject<number>();
  
  private questions: Question[] = [
  new Question('What is my last name?','gifford'),
  new Question('What color is the restart button?','yellow'),
  new Question('What color is the contact button?','green')

  ]

  private pointCounter: number = 0;
  private perfectScore: number = this.questions.length;

  getPointCounter(){
    return this.pointCounter;
  }

  getQuestions() {
    return this.questions;
  }

  getAnswer(num: number) {
    return this.questions[num].answer.toLowerCase();
  }

  submitAnswer(input: string, i: number){
    if (input.toLowerCase().trim() == this.questions[i].answer.toLowerCase().trim()){
      this.pointCounter++;
      this.pointCounterChange.next(this.pointCounter);
    }
    this.questionAnswered(i);

  }

  getPerfectScore(){
    return this.questions.length;
  }

  questionAnswered(start: number){
    this.questions.splice(start, start + 1);
    this.questionListChange.next(this.questions.slice());
  }
  

}
