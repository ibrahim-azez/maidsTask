import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map, shareReplay, catchError } from 'rxjs/operators';
import { SharedService } from '../../../core/data-access/services/shared.service';
import { IUserCard } from '../interfaces/user-card';
import { IUsersList } from '../interfaces/users-list';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private readonly BACKEND_ENDPOINT = 'https://reqres.in/api';
	private readonly PAGES_ROUTE = 'users?page=';
	private readonly USER_ROUTE = 'users';
	private userCache$!: Observable<IUserCard>;
	private usersListCache$!: Observable<IUsersList>;

	constructor(
		private readonly http: HttpClient,
		private sharedService: SharedService
	) {}

	getUser(userId?: string): Observable<IUserCard> {
		// if (!this.userCache$)
		return this.http
			.get<IUserCard>(
				`${this.BACKEND_ENDPOINT}/${this.USER_ROUTE}/${userId ?? '1'}`
			)
			.pipe(
				shareReplay(1),
				catchError(() => {
					this.sharedService.executingLoader$.next(false);
					return EMPTY;
				}),
				map((res) => {
					this.sharedService.executingLoader$.next(false);
					return res;
				})
			) as Observable<IUserCard>;

		// return this.userCache$;
	}

	getUsersList(pageNumber?: string): Observable<IUsersList> {
		// if (!this.usersListCache$)
		return this.http
			.get<IUsersList>(
				`${this.BACKEND_ENDPOINT}/${this.PAGES_ROUTE}${pageNumber}`
			)
			.pipe(
				catchError(() => {
					this.sharedService.executingLoader$.next(false);
					return EMPTY;
				}),
				map((res) => {
					this.sharedService.executingLoader$.next(false);
					return res;
				})
			) as Observable<IUsersList>;
		// return this.usersListCache$;
	}
}
