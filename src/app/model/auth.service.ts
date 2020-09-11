import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private dataSource: RestDataSource) {}
  authenticate(username: string, password: string): Observable<boolean> {
    return this.dataSource.authenticate(username, password);
  }

  authenticated(): boolean {
    return this.dataSource.auth_token != null;
  }
  clear() {
    this.dataSource.auth_token = null;
  }
}
