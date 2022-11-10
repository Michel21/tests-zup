import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TodoTypes } from "./Itodo-list";
import { addDays } from 'date-fns'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
 })

 export class TodoListComponent implements OnInit {
 
  increment = 0;
  listTodo: TodoTypes[] = [];
  listConcluida: TodoTypes[] = [];

  addControl = new FormControl();

  constructor(){}

  ngOnInit(): void {
    this.listTodo = JSON.parse(sessionStorage.getItem('@list')) || [];
    this.increment = this.listTodo.length;
    this.listConcluida = this.listTodo.filter((f) => f.status == 'concluida')
    .slice(this.listTodo.length-3)
    .sort((a: TodoTypes, b: TodoTypes) => (a.date < b.date) ? 1 : -1);
  }

  addTask(){
    this.increment++;
    const today = this.listTodo.length > 0 ? this.listTodo[this.listTodo.length-1].date : new Date();
    this.listTodo.push({
      id: this.increment,
      title: this.addControl.value,
      status: 'pendente',
      date: addDays(new Date(today),1)
    });
    this.listTodo.sort((a: TodoTypes, b: TodoTypes) => (a.date > b.date) ? 1 : 1);
    sessionStorage.setItem('@list', JSON.stringify(this.listTodo));
    this.addControl.setValue('');
  }

  onTaskDone(item:TodoTypes){
    const index = this.listTodo.findIndex((f) => f.id === item.id);
      this.listTodo.map((items, i) => {
        if(i === index){
          items.status = 'concluida'
        }
        return items;
      });
     
      this.listConcluida = this.listTodo.filter((f) => f.status == 'concluida')
      .slice(this.listTodo.length-3)
      .sort((a: TodoTypes, b: TodoTypes) => (a.date < b.date) ? 1 : -1);
      sessionStorage.setItem('@list', JSON.stringify(this.listTodo))
   }
  
 }