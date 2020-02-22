import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(
    private todoService: TodoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  setClasses() {
    const classes = {
      todo: true,
      complete: this.todo.Completed
    };
    return classes;
  }

  onToggle(todo: Todo) {
    todo.Completed = !todo.Completed;
    // this.todoService.toggleCompleted(todo).subscribe(item => {
    this.toggleTodo.emit(todo);
    todo.Completed
      ? this.openSnackBar("Item Completed!", "Dismiss")
      : this.openSnackBar("Item not complete!", "Dismiss");
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
    this.openSnackBar("Item Deleted!", "Dismiss");
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
