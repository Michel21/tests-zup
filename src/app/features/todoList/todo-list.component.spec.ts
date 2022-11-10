import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TodoListComponent } from './todo-list.component';


let mocklistTodo = [
{id: 3, title: "task1", status: "pendente", date: "11/10/2022"},
{id: 1, title: "task1", status: "pendente", date: "11/10/2022"},
{id: 2, title: "task1", status: "concluido", date: "11/10/2022"}
]


describe('TodoListComponent component', () => {
  let fixture: ComponentFixture<TodoListComponent>;
  let component: TodoListComponent;
  
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([])
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;

  });

  it('should created component', () => {
    expect(component).toBeTruthy();
  });

  it(`Should testing method addTask()`, () => {
   
    component.addTask();

    expect(component.listTodo).toEqual(mocklistTodo)

  });
  
  it(`Should testing method onTaskDone`, () => {

    component.onTaskDone(mocklistTodo[0]);

    expect(component.onTaskDone).toHaveBeenCalledWith(mocklistTodo[0])
  
  });

});
