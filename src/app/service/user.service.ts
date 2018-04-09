import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: Http) {  }

  getUser(): Observable<User[]> {
      return this.http
          .get(environment.userUrl)
          .map((response: Response) => {
            const c= <User[]>response.json();
            console.log("user: " + (JSON.stringify(c)));
              return c;
          })
          .catch(this.handleError);
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
}
