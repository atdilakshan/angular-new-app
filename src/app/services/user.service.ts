import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUser(): Observable<any> {
    return of({
      name: 'Test',
      email: 'test@test.com',
    });
  }
}
