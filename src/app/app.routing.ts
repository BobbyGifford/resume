// Here is the router which allows naviagion between components.

// It is used in both the header and router outlet.
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SurveyFormComponent } from "app/formApp/survey-form/survey-form.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'quiz', loadChildren: './quizApp/quiz-app.module#QuizAppModule'},
    { path: 'survey', component: SurveyFormComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
})
export class Routing{
    
}

