import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.todos$;
  }

  delete(todo: Todo) {
    this.todoService.delete(todo);
  }

  check(todo: Todo) {
    this.todoService.check(todo);
  }
}
