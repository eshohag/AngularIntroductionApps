import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { CarComponent } from './cars/car.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataBindComponent } from './data-bind/data-bind.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dataBind' },
  { path: 'dataBind', component: DataBindComponent },
  { path: 'car', component: CarComponent },
  { path: 'student', component: StudentComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
