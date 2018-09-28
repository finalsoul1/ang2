import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  // Observable 을 리턴할수도있고 Promise 를 리턴할수도있고 boolean 을 리턴할수도 있다.
}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate>{

  constructor(private router: Router) { }

  canDeactivate() {
    console.log('CanDeactivateGuardService.canDeactivate() called');
    // true 를 리턴하면 컴포넌트가 파괴되고 화면이 변경됩니다.
    // false 를 리턴하면 컴포넌트 변경작업이 취소됩니다.
    return window.confirm("화면이 전환되면 저장되지 않은 상태정보는 손실됩니다."
    + "\n경로를 변경하시겠습니까?");
    // 이 코드만으로 확인창이 뜸. 확인:true, 취소:false
  }
}
