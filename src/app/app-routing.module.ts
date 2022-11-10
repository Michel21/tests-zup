import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo-list',
    loadChildren: () => import('./features/todoList/todo-list.module').then(m => m.TodoListModule)
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "todo-list",
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
