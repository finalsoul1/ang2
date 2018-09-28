import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../service/contact.service';
import { Contact } from '../interface/contact';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact;

  constructor(private contactsService: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("this.route.snapshot.params = " + JSON.stringify(this.route.snapshot.params));

    // { path: 'contact/:id', component: ContactDetailComponent }
    // http://localhost:4200/contact/7
    let id = this.route.snapshot.params['id'];

    // URL 문자열의 일부를 정보를 구하는 키 값으로 사용합니다.
    // 서비스의 함수에게 키값을 전달하면서 해당 데이터를 구해달라고 요청합니다.
    this.contactsService.getContact(id).subscribe(contact => {
    // .subscribe 가 나오기 때문에 Observable 객체
      this.contact = contact;
      console.log("this.contact = " + JSON.stringify(this.contact));
    });
  }

}
