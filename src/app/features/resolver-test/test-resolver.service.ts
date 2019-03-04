import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class TestResolverService implements Resolve<string> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next('ready');
        observer.complete();
      }, 2000);
    });
  }

}
