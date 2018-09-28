import { Routes } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactDataComponent } from './contact-data/contact-data.component';

import { ContactResolveGuardService } from './guard/contact-resolve-guard.service';

// contact/:id
// contact/위치보유자
// 위치보유자 위치에 어떠한 문자열이 있다면 그 문자열을 id=문자열 형태로 처리합니다.
// contact/10 ==> id=10
// contact/x ==> id=x
// contact/a20 ==> id=a20
export const AppRoutes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact/:id', component: ContactDetailComponent },
  { path: 'info/:id', component: ContactInfoComponent, resolve: { yyy: 'infoService' } },
  // ContactInfoComponent 를 처리하기 전에 infoService 의 로직을 기동하고
  // 그 결과를 "yyy=결과" 형태로 ContactInfoComponent 에게 전달한다.
  // 리졸브 로직 처리에 시간이 오래 걸리면 컴포넌트가 보이지 않는 상태가
  // 오랫동안 유지 됩니다. 이는 매우 좋지 않은 방법입니다.
  // 리졸브 가드로직에서 시간이 오래걸리는 처리는 하지 말아야 합니다.
  { path: 'data/:id', component: ContactDataComponent,
  resolve: { contact: ContactResolveGuardService } },
];
