import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoService } from './to-do.service';
import { ToDoItem } from '../models/to-do.model';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private toDoService: TodoService) {}

  storeTasks() {
    const tasks = this.toDoService.getToDoItems(); // retreives tasks
    this.http
      .put(
        'https://to-do-list-24255-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        tasks
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchTasks() {
    this.http
      .get<ToDoItem[]>(
        'https://to-do-list-24255-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
      )
      .subscribe((tasks) => {
        this.toDoService.setTasks(tasks);
      });
  }
}
