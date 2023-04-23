import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {UsersService} from "./users.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {UsersComponent} from "./users/users.component";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
