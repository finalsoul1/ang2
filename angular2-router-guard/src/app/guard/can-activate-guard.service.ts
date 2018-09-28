import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

export class UserToken { }

export class Permissions {
  canActivate(user: UserToken, params: any): boolean {
    // 사용자 정보를 바탕으로 컴포넌트를 보여줘도 되는지 판단하는 로직을 배치한다.
    return true;
  }
}

@Injectable()
export class CanActivateGuardService implements CanActivate {
  constructor(private permissions: Permissions, private currentUser: UserToken) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let url: string = state.url;

    console.log('CanActivateGuardService.canActivate() called');
    console.log(url); // /child2/7
    console.log(route.params); // id: "7"
    console.log(route.params['id']); // 7

    // If the function returns false (e.g: the user is not logged in)
    // the application will not navigate to the route.
    // 최종적으로 true를 리턴하면 컴포넌트가 기동되고
    // false를 리턴하면 컴포넌트를 기동하지 않습니다.
    return this.permissions.canActivate(this.currentUser, route.params);
  }

}
