import { Component, OnInit } from '@angular/core';

import { MyHttpService } from '../services/my-http.service';

class Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  todos: Todo[] = [];
  posttodos: Todo[] = [];

  constructor(private myHttpService: MyHttpService) { }

  ngOnInit() {
    this.myHttpService.getTodos().then(data => this.todos = data);
  }

  onClick(){
    this.myHttpService.deleteTodos();
  }

}
