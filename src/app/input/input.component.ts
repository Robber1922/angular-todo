import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  inputForm: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.inputForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  addTodo() {
    if (this.inputForm.valid) {
      const value = this.inputForm.value.title;
      this.todoService.add(value);
      this.inputForm.reset();
    }
  }
}
