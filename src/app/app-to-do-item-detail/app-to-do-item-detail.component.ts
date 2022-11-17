import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToDoItem } from '../models/to-do.model';
import { TodoService } from '../services/to-do.service';

@Component({
  selector: 'app-todo-item-detail',
  templateUrl: './app-to-do-item-detail.component.html',
  styleUrls: ['./app-to-do-item-detail.component.css'],
})
export class TodoItemDetailComponent implements OnInit, OnDestroy {
  toDos: ToDoItem;
  id: number;
  isVisted = false;
  subscription: Subscription;

  constructor(
    private toDoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //subscribe to the params observable allowing me to react to changes in route params/id
    //activatedRoute object gives us access to the id passed in the url
    //need to do it this way as the component may be reloaded from within (alt = snapshot)
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id']; //id used to identify task
      this.toDos = this.toDoService.getToDoItem(this.id); //load singular task - when the id chnages it will load the new task
    });
  }

  //toggle the open class to open/close dropdown menu
  checkVisited() {
    this.isVisted = !this.isVisted; //reverse value
  }

  onEditTask() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['edit']);
  }

  onDeleteTask() {
    this.toDoService.deleteToDoItems(this.id);
    this.router.navigate(['/to-do-list']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // unsubscribe to prevent memory leaks
  }
}
