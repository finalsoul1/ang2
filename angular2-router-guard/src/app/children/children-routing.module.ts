import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { ChildrenComponent } from './children.component';
import { Child7Component } from './child7/child7.component';
import { Child8Component } from './child8/child8.component';
import { Child9Component } from './child9/child9.component';
import { ChildWrapperComponent } from './child-wrapper/child-wrapper.component';

import { CanActivateChildGuardService } from '../guard/can-activate-child-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'child7', component: Child7Component },
      { path: 'child8', component: Child8Component },
      { path: 'child9', component: Child9Component },
      {
        path: 'wrapper/children', component: ChildrenComponent,
        children: [
          {
            path: '', component: ChildWrapperComponent, // this is wrapper
            children: [
              { path: '', component: Child7Component },
              { path: 'child7', component: Child7Component },
              { path: 'child8', component: Child8Component },
              { path: 'child9', component: Child9Component },
            ]
          },
        ]
      },
      {
        path: 'children', component: ChildrenComponent,
        // http://localhost:4200/children
        // children 문자열로 ChildrenComponent 를 배치합니다.
        // ChildrenComponent 컴포넌트 화면 내부에 router-outlet 설정이 존재합니다.
        // 이 곳에 어떤 컴포넌트를 배치할지 추가적인 설정이 필요합니다.
        children: [
          // http://localhost:4200/children
          { path: '', component: Child7Component },
          // http://localhost:4200/children/child7
          { path: 'child7', component: Child7Component },
          // http://localhost:4200/children/child8
          { path: 'child8', component: Child8Component },
          // http://localhost:4200/children/child9
          { path: 'child9', component: Child9Component },
        ]
      },
      {
        path: 'guard/children', component: ChildrenComponent,
        children: [
          {
            path: '',
            // 자식들한테 일괄적으로 적용하고 싶을때 씀.
            canActivateChild: [CanActivateChildGuardService],
            children: [
              // http://localhost:4200/guard/children
              { path: '', component: Child7Component },
              // http://localhost:4200/guard/children/child7
              { path: 'child7', component: Child7Component },
              // http://localhost:4200/guard/children/child8
              { path: 'child8', component: Child8Component },
              // http://localhost:4200/guard/children/child9
              { path: 'child9', component: Child9Component },
            ]
          },
        ]
      },
    ])
  ],
  exports: [RouterModule]
})
export class ChildrenRoutingModule { }
