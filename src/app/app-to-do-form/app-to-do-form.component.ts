import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../services/to-do.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './app-to-do-form.component.html',
  styleUrls: ['./app-to-do-form.component.css'],
})
export class ToDoFormComponent implements OnInit {
  priorities: string[] = ['Low', 'Medium', 'High'];
  toDoForm: FormGroup;
  myDate: DatePipe;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.toDoForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      priority: new FormControl('low'),
      description: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.todoService.addToDoItems(this.toDoForm.value); //call to service to add submision
    this.router.navigate(['/to-do-list']); //navigate home after submitting
    alert('New Item added to your to-do-list');
  }

  onCancel() {
    this.toDoForm.reset();
  }
}
