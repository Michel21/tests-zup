import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TodoTypes } from "./Itodo-list";
import { format, addDays } from 'date-fns'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
 })

 export class TodoListComponent implements OnInit {
 
  increment = 0;
  listTodo: TodoTypes[] = [];

  addControl = new FormControl();

  constructor(){}

  ngOnInit(): void {
    this.listTodo = JSON.parse(sessionStorage.getItem('@todo')) || [];
    this.increment = this.listTodo.length;
  }

  addTask(){
    this.increment++;
    this.listTodo.push({
      id: this.increment,
      title: this.addControl.value,
      status: 'pendente',
      date: format(addDays(new Date(),1), 'MM/dd/yyyy')
    });
    this.listTodo.sort((a: TodoTypes, b: TodoTypes) => (a.date > b.date) ? 1 : -1);
    sessionStorage.setItem('@todo', JSON.stringify(this.listTodo))
  }

  onTaskDone(item:TodoTypes){
    const index = this.listTodo.findIndex((f) => f.id === item.id);
      this.listTodo.map((items, i) => {
        if(i === index){
          items.status = 'concluido'
        }
        return items;
      });
      sessionStorage.setItem('@todo', JSON.stringify(this.listTodo))
   }
   
 }