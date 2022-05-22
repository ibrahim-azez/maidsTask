import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl = 'https://reqres.in/api/users?page=';

  constructor(private readonly http: HttpClient) {}

  getUser(id: string) {
    this.http.get(this.userUrl + id);
  }
}
