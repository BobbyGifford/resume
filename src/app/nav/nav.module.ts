import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routing } from "app/app.routing";
import { HeaderComponent } from "app/nav/header/header.component";
import { ButtonListComponent } from "app/nav/button-list/button-list.component";

@NgModule({
  imports: [
    CommonModule,
    Routing,
  ],
  declarations: [
    HeaderComponent,
    ButtonListComponent
  ],
  exports: [
    Routing,
    HeaderComponent,
    ButtonListComponent
  ]
})
export class NavModule { }
