import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  URL: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor() { }

  getTodos(): Promise<any> {
    return axios.get(this.URL)
      .then(function(response) {
        // handle success
        console.log(response);

        return response.data;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
  }

  deleteTodos(): Promise<any> {
    return axios.delete(this.URL)
      .then(res => {
        console.log(res);
      })
  }
}
