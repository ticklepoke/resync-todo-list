import { async, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { TodoComponent } from "../app/components/todo/todo.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { TodoDialogComponent } from "./components/todo-dialog/todo-dialog.component";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatButtonModule,
  MatNativeDateModule
} from "@angular/material";

describe("App component", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoComponent,
        SideBarComponent,
        TodoItemComponent,
        TodoDialogComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        HttpClientModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule
      ]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
