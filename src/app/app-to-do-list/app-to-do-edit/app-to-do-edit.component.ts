import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TodoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './app-to-do-edit.component.html',
  styleUrls: ['./app-to-do-edit.component.css'],
})
export class ToDoEditComponent implements OnInit {
  priorities: string[] = ['Low', 'Medium', 'High'];
  toDoForm: FormGroup;
  id: number;
  editMode = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    //subcribe to params observable to get access to chnaging id
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm(); //-call form when route params change as it means page was reloaded
    });
  }

  //initalise the form
  private initForm() {
    let formTitle = '';
    let formDueDate = '';
    let formPriority = '';
    let formDescription = '';
    //if editmode is true then values should be those loaded with index
    if (this.editMode) {
      const tdFormEditMode = this.todoService.getToDoItem(this.id);
      formTitle = tdFormEditMode.title;
      formDueDate = tdFormEditMode.date;
      formPriority = tdFormEditMode.priority;
      formDescription = tdFormEditMode.description;
    } //assign either the existing value if in edit mode or empty defaults if not
    this.toDoForm = new FormGroup({
      title: new FormControl(formTitle, Validators.required),
      date: new FormControl(formDueDate, Validators.required),
      priority: new FormControl(formPriority),
      description: new FormControl(formDescription, Validators.required),
    });
  }

  //either going add recipe or update existing
  onSubmit() {
    if (this.editMode) {
      this.todoService.updateToDoItems(this.id, this.toDoForm.value);
    } else {
      this.todoService.addToDoItems(this.toDoForm.value);
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route }); //go up a level relative to this route when cancled clicked
  }
}
