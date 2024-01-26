
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'https://reqres.in/api/users';
  user: any;
  page = 1;
  current = 1;
  pageSize = 6;
  total = 0;
  res: any;
  baseURL='https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers (page: number) :Observable<User[]> {

    const url = 'https://reqres.in/api/users';
    const params = { page: page };

        return this.http.get<User[]>(this.baseURL , { params }).pipe(
          map((response: any) => {
            this.pageSize = response.per_page;
            this.current = response.page;
            this.total = response.total_pages;
            return response.data;
          })
        );
    
        }

  getUser(id: number){

    
      return this.http.get<User>(this.baseURL + '/' + id).pipe(
        map((response: any) =>  response.data));
    
  }
}



