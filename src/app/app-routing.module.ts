import { RouterModule, Routes } from '@angular/router';
import { ToDoFormComponent } from './app-to-do-form/app-to-do-form.component';
import { ToDoListComponent } from './app-to-do-list/app-to-do-list.component';
import { NgModule } from '@angular/core';
import { ToDoHomeComponent } from './app-to-do-home/app-to-do-home.component';
import { TodoItemDetailComponent } from './app-to-do-item-detail/app-to-do-item-detail.component';
import { ToDoEditComponent } from './app-to-do-list/app-to-do-edit/app-to-do-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/to-do-home', pathMatch: 'full' }, // - empty path is in every route, this overwrites and says to only redirtect if full path is empty
  {
    path: 'to-do-list',
    component: ToDoListComponent,
    children: [
      { path: ':id', component: TodoItemDetailComponent }, // :tells angular this is dynamic 'to-do-list/id - id refers to position in array
      { path: ':id/edit', component: ToDoEditComponent },
    ],
  },

  { path: 'to-do-new', component: ToDoFormComponent },
  { path: 'to-do-home', component: ToDoHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // routes configured and added to the angular router
  exports: [RouterModule], //export the newly configured router
})
export class AppRoutingModule {}
