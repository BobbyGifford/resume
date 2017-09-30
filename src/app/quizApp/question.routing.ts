import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { QuestionListComponent } from "app/quizApp/question-list/question-list.component";

const quizRoutes: Routes = [
    { path: '', component: QuestionListComponent},
];

@NgModule({
    imports: [RouterModule.forChild(quizRoutes)],
    exports: [RouterModule],
})
export class QuestionRouting{
    
}
