import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { TodoListComponent } from "./todo-list.component";


const ROUTES: Routes = [
  { path: '', component: TodoListComponent },
]

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
  ],
})

export class TodoListModule {}