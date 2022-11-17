import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { TodoService } from '../services/to-do.service';

@Component({
  selector: 'app-to-do-home',
  templateUrl: './app-to-do-home.component.html',
  styleUrls: ['./app-to-do-home.component.css'],
})
export class ToDoHomeComponent implements OnInit {
  length: number;
  constructor(
    private todoService: TodoService,
    private dataStoreService: DataStorageService
  ) {
    this.printTaskNumber();
  }

  ngOnInit(): void {}
  printTaskNumber() {
    this.length = this.todoService.getToDoItemsLength();
  }

  onSaveData() {
    this.dataStoreService.storeTasks();
  }

  onFetchData() {
    this.dataStoreService.fetchTasks();
  }
}
