import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToDoItem } from '../models/to-do.model';

@Injectable()
export class TodoService {
  toDoChanged = new Subject<ToDoItem[]>();
  private toDoItems: ToDoItem[] = [
    new ToDoItem(
      'First toDoList Item',
      '01-01-2020',
      'High',
      'Testy MacTestTest'
    ),
    new ToDoItem(
      'Second toDoList Item',
      '01-01-2021',
      'Medium',
      'Testy MacTestTest2'
    ),
    new ToDoItem(
      'Third toDoList Item',
      '01-01-2023',
      'Low',
      'Testy MacTestTest3'
    ),
  ];

  //will overwrite to-do tasks above
  setTasks(tasks: ToDoItem[]) {
    this.toDoItems = tasks;
    this.toDoChanged.next(this.toDoItems.slice());
  }

  getToDoItems() {
    return this.toDoItems.slice();
  }

  getToDoItemsLength() {
    return this.toDoItems.length;
  }

  getToDoItem(index: number) {
    console.log(this.toDoItems[index]);
    return this.toDoItems[index];
  }

  addToDoItems(todo: ToDoItem) {
    this.toDoItems.push(todo); // push new todo Item on to todo array
    this.toDoChanged.next(this.toDoItems.slice());
  }

  updateToDoItems(index: number, newTodo: ToDoItem) {
    this.toDoItems[index] = newTodo; //take the lement at the index of the array = newToDoTask
    this.toDoChanged.next(this.toDoItems.slice()); //subject - emits new copy of recipes, listen to it in list
  }

  deleteToDoItems(index: number) {
    this.toDoItems.splice(index, 1); //splice at index, remove 1 element
    this.toDoChanged.next(this.toDoItems.slice()); //subject - emits new copy of recipes
  }
}
