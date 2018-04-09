import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';


@Injectable()
export class SortuserService {
  constructor(private http: HttpClient) {  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(environment.userUrl)      
}
}