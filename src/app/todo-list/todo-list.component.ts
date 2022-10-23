import { Component, OnInit } from '@angular/core';
import { ITask, TASK_MOCK_DATA } from '../task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  tasks: ITask[] = TASK_MOCK_DATA;
  currentDescription?: string;

  constructor() { }

  setDescription(description?: string): void {
    this.currentDescription = description;
  }

}
