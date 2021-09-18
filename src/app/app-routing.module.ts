import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';

import { ShowtaskComponent } from './showtask/showtask.component';

const routes: Routes = [ 
 
  { path: 'addtask', component: AddtaskComponent },
{ path: 'showtask', component:ShowtaskComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
