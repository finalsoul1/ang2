import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-reference-variable',
  templateUrl: './form-reference-variable.component.html',
  styleUrls: ['./form-reference-variable.component.css']
})
export class FormReferenceVariableComponent implements OnInit {
  user = { id: '', name: '', password: '' }

  constructor() { }

  ngOnInit() {
  }

  submitForm(f: NgForm) {
    // 원한다면 순수 자바스크립트 코드를 사용할 수 있다.
    var name = (<HTMLInputElement>document.querySelector('#name')).value;
    // var name = (<HTMLInputElement>document.getElementById('name')).value;
    console.log('name = ', name);

    if(name){
      f.value.name = name;
    }

    alert(JSON.stringify(f.value));
    console.log(this.user)

    if(f.value.name){
      delete f.value.name;
    }
    // delete: 객체의 프로퍼티를 동적으로 삭제
  }
}
