import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

interface TilesType {
  title: string;
  count: number;
}

enum SortBy {
  All = 'all',
  Alarm = 'alarm',
  History = 'history',
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tiles: TilesType[] = [
    { title: 'All', count: 0 },
    { title: 'Alarm', count: 0 },
    { title: 'History', count: 0 }
  ];
  sortBy: SortBy = SortBy.All;
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();

  }

  toggleFilter(item) {
    console.log(1, item);
  }

  getTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.tiles[0].count = todos.length;
      this.tiles[1].count = todos.filter(todo => !todo.completed).length;
      this.tiles[2].count = todos.filter(todo => todo.completed).length;
      if (this.sortBy === 'all') {
          this.todos = todos;

      }
    });
  }

}

