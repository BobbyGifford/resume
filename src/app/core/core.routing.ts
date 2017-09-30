import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "app/core/home/home.component";
import { AboutComponent } from "app/core/about/about.component";
import { SurveyFormComponent } from "app/formApp/survey-form/survey-form.component";

const coreRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [RouterModule]
})
export class CoreRouting {}