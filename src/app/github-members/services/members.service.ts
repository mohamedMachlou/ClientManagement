import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Member } from '../models/member';
import { SearchUsers } from '../models/search-users';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  apiUrl = 'https://api.github.com/users';
  constructor(private http: HttpClient) {}

  getMmembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl).pipe(
      map((users) =>
        users.map((user) => {
          return {
            avatar_url: user.avatar_url,
            html_url: user.html_url,
            login: user.login,
          };
        })
      )
    );
  }

  searchMember(member: string): Observable<SearchUsers> {
    return this.http.get<SearchUsers>(
      `https://api.github.com/search/users?q= ${member}`
    );
  }
}
