import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app-header/app-header.component';
import { ToDoFormComponent } from './app-to-do-form/app-to-do-form.component';
import { ToDoListComponent } from './app-to-do-list/app-to-do-list.component';
import { ToDoItemComponent } from './app-to-do-list/app-to-do-item/app-to-do-item.component';
import { ToDoHomeComponent } from './app-to-do-home/app-to-do-home.component';
import { TodoService } from './services/to-do.service';
import { TodoItemDetailComponent } from './app-to-do-item-detail/app-to-do-item-detail.component';
import { ToDoEditComponent } from './app-to-do-list/app-to-do-edit/app-to-do-edit.component';
import { DataStorageService } from './services/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoFormComponent,
    ToDoListComponent,
    ToDoItemComponent,
    ToDoHomeComponent,
    TodoItemDetailComponent,
    ToDoEditComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TodoService, DataStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
