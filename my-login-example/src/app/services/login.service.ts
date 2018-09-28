import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL: string = 'http://localhost:3000/users/';

  constructor() { }

  auth(user): Promise<any> {
    // http://localhost:3000/users/user
    // ==> user 라는 id로 존재하는 사용자 정보를 응답
    // http://localhost:3000/users/user2
    // ==> user2 라는 id는 존재하지 않으므로 빈 정보를 응답
    return axios.get(this.URL + user.id)
      .then(function(response) {
        console.log('--------1-------');
        console.log(response);
        return response.data;
      });
  }
}
