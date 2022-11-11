import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TodoListComponent } from './todo-list.component';


let mocklistTodo = [
{id: 3, title: "TASK3", status: "pendente", date: "2022-11-12T01:41:45.707Z"},
{id: 1, title: "TASK2", status: "pendente", date: "2022-11-13T01:41:45.707Z"},
{id: 2, title: "TASK1", status: "pendente", date: "2022-11-14T01:41:45.707Z"},
{id: 4, title: "TASK4", status: "concluida", date: "2022-11-15T01:41:45.707Z"},
{id: 5, title: "TASK5", status: "concluida", date: "2022-11-16T01:41:45.707Z"},
{id: 6, title: "TASK6", status: "concluida", date: "2022-11-17T01:41:45.707Z"},
{id: 7, title: "TASK7", status: "concluida", date: "2022-11-18T01:41:45.707Z"}
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

  it(`Should testing method ngOnInit()`, () => {
    component.ngOnInit();
    component.listTodo = mocklistTodo;
    expect(component.listTodo.length).toBeGreaterThanOrEqual(1);
    fixture.detectChanges();

  });

  it(`Should testing method addTask()`, () => {
    jest.spyOn(component, 'addTask');
    component.addTask();
    expect(component.listTodo.length).toBeGreaterThanOrEqual(1);
    expect(component.listTodo[0].status).toContain('pendente');

  });
  
  it(`Should testing method onTaskDone`, () => {
    jest.spyOn(component, 'onTaskDone');
    component.listTodo = mocklistTodo;
    component.onTaskDone(mocklistTodo[0]);
    expect(component.listTodo[0].status).toContain('concluida');
    expect(component.listConcluida.length).toBeGreaterThanOrEqual(1);
  
  });

});
