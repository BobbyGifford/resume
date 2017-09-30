import { CommonModule } from "@angular/common";
import { CoreRouting } from "app/core/core.routing";
import { NgModule } from "@angular/core";
import { HomeComponent } from "app/core/home/home.component";
import { AboutComponent } from "app/core/about/about.component";

@NgModule({
  imports: [
    CommonModule,
    CoreRouting,
  ],
  declarations: [
      HomeComponent,
      AboutComponent,
  ]
})
export class CoreModule { }
