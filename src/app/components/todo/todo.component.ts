import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

interface TilesType {
  title: string;
  count: number;
  description: string;
}

enum FilterBy {
  todo = 'todo',
  alarm = 'alarm',
  history = 'history'
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tiles: TilesType[] = [
    { title: 'All', count: 0, description: 'All items' },
    {
      title: 'Alarm',
      count: 0,
      description: 'Incompleted items that are due soon'
    },
    { title: 'History', count: 0, description: 'Completed items' }
  ];
  filterBy: string = FilterBy.todo;
  todos: Todo[];
  todosFiltered: Todo[];
  loading = true;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  toggleFilter(item) {
    this.filterBy = FilterBy[item.id];
    if (this.filterBy === 'todo') {
      this.todosFiltered = this.todos;
    } else if (this.filterBy === 'alarm') {
      this.todosFiltered = this.todos.filter(todo => !todo.Completed);
    } else if (this.filterBy === 'history') {
      this.todosFiltered = this.todos.filter(todo => todo.Completed);
    }
  }

  toggleSort(item) {
    if (item === 'name') {
      this.todosFiltered.sort(
        (a, b) => parseInt(a.Title, 10) - parseInt(b.Title, 10)
      );
    } else if (item === 'date') {
      this.todosFiltered.sort((a, b) => {
        if (a.DueDate < b.DueDate) {
          return -1;
        } else if (a.DueDate > b.DueDate) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      return;
    }
  }

  getTodos() {
    this.todoService.getTodos().subscribe(todos => {
      todos.sort((a, b) => parseInt(a.Title, 10) - parseInt(b.Title, 10));
      if (this.filterBy === 'todo') {
        this.todos = todos;
        this.todosFiltered = todos;
      } else if (this.filterBy === 'alarm') {
        this.todosFiltered = todos.filter(todo => !todo.Completed);
      }
      this.tiles[0].count = this.todosFiltered.length;
      this.tiles[1].count = this.todosFiltered.filter(
        todo => !todo.Completed
      ).length;
      this.tiles[2].count = this.todosFiltered.filter(
        todo => todo.Completed
      ).length;
      this.loading = false;
    });
  }

  deleteTodo(todo: Todo) {
    this.todosFiltered = this.todosFiltered.filter(t => t.ID !== todo.ID);
    this.todoService.deleteTodo(todo).subscribe();
    this.tiles.forEach(tile => {
      if (todo.Completed === false && tile.title !== 'History') {
        tile.count--;
      } else if (todo.Completed === true && tile.title !== 'Alarm') {
        tile.count--;
      }
    });
  }
}
