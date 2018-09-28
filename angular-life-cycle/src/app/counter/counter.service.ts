import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

// subject 가 데이터를 방출하면 Observable 이 구독

@Injectable()
export class CounterBridgeService {

  private subject = new Subject<any>();

  constructor() { }

  increment() {
    // 이벤트를 수신받으면 적절한 데이터를 구독자의 콜백함수에게 전달합니다.
    this.subject.next({ type: 'increment' });
  }

  decrement() {
    this.subject.next({ type: 'decrement' });
  }

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}
