import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentServiceService } from './student/services/student-service.service';
import { CarComponent } from './cars/car.component';
import { CarServiceService } from 'src/app/cars/car-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DataBindComponent } from './data-bind/data-bind.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CarComponent,
    StudentComponent,
    PageNotFoundComponent,
    DataBindComponent
  ],
  providers: [
    StudentServiceService,
    CarServiceService
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule { }
