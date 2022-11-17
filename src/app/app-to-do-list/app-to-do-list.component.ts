import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToDoItem } from '../models/to-do.model';
import { TodoService } from '../services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './app-to-do-list.component.html',
  styleUrls: ['./app-to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit, OnDestroy {
  toDoItems: ToDoItem[] = [];
  subscription: Subscription;

  constructor(private tDService: TodoService, private router: Router) {}

  ngOnInit(): void {
    //listen/subscribe to taskchanged subject - if it does change will recive a new array of recipes(callback)
    this.subscription = this.tDService.toDoChanged.subscribe(
      (toDoItems: ToDoItem[]) => {
        this.toDoItems = toDoItems;
      }
    );
    this.toDoItems = this.tDService.getToDoItems();
  }

  onNewEntry() {
    this.router.navigate(['/to-do-new']); //naviagte to toDoForm on btn click
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // unsubscribe to prevent memory leaks
  }
}
