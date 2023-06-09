import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { FormComponent } from './people/form/form.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  {
    path: 'people', component: PeopleComponent, children: [
      { path: 'add', component: FormComponent },
      { path: ':id', component: FormComponent }
    ]
  },
  { path: '**', component: ErrorComponent }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
