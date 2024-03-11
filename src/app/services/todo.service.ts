import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos$ = new BehaviorSubject<Todo[]>([]);

  add(title: string): void {
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      isCompleted: false,
    };

    const updateTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updateTodos);
    console.log('add render');
  }

  delete(todo: Todo): void {
    const updateTodos = this.todos$.getValue().filter((t) => t !== todo);
    this.todos$.next(updateTodos);
    console.log('delete render');
  }

  check(todo: Todo): void {
    const updateTodos = this.todos$.getValue().map((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    this.todos$.next(updateTodos);
    console.log('check render');
  }
}
