import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { LazyLoadComponent } from './lazy-load.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      // http://localhost:4200/lazy-load/lazy-load
      // lazy-load/lazy-load 문자열로 모듈을 레이지 로딩했습니다.
      // 이 경우 path:'' 로 설정하면 URL 패턴이 lazy-load/lazy-load 인걸로 인정됨.
      // 레이지로딩만 이럼.
      { path: '', component: LazyLoadComponent },
      // 레이지 로딩만 사용할 경우에는 아래 설정은 필요 없다.
      // { path: 'lazy-load', component: LazyLoadComponent },
    ])
  ],
  exports: [RouterModule]
})
export class LazyLoadRoutingModule {
  constructor(){
    console.log('LazyLoadRoutingModule # constructor() called.');
  }
}
