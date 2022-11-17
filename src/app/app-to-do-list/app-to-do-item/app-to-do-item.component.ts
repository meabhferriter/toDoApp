import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/to-do.model';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './app-to-do-item.component.html',
  styleUrls: ['./app-to-do-item.component.css'],
})
export class ToDoItemComponent implements OnInit {
  @Input() todoItem: ToDoItem;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
