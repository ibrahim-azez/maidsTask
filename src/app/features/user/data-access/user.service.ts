import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckLocalStorageCache } from '@core/check-local-storage-cache';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SharedService } from '../../../core/data-access/services/shared.service';
import { IUserCard } from '../interfaces/user-card';
import { IUsersList } from '../interfaces/users-list';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private readonly BACKEND_BASE_ENDPOINT = 'https://reqres.in/api';
	private readonly PAGES_ROUTE_QUERY = 'users?page';
	private readonly USER_ROUTE_PARAMS = 'users';

	constructor(
		private readonly http: HttpClient,
		private sharedService: SharedService
	) {}

	@CheckLocalStorageCache('userId-')
	getUserById(userId: string, updateCache?: boolean): Observable<IUserCard> {
		return this.http
			.get<IUserCard>(
				`${this.BACKEND_BASE_ENDPOINT}/${this.USER_ROUTE_PARAMS}/${userId}`
			)
			.pipe(
				catchError(() => {
					this.sharedService.executingLoader$.next(false);
					return EMPTY;
				}),
				tap((res) => {
					this.sharedService.executingLoader$.next(false);

					return res;
				})
			) as Observable<IUserCard>;
	}

	@CheckLocalStorageCache('usersListPage-')
	getUsersList(
		pageNumber: number,
		updateCache?: boolean
	): Observable<IUsersList> {
		return this.http
			.get<IUsersList>(
				`${this.BACKEND_BASE_ENDPOINT}/${
					this.PAGES_ROUTE_QUERY
				}=${pageNumber.toString()}`
			)
			.pipe(
				catchError(() => {
					this.sharedService.executingLoader$.next(false);
					return EMPTY;
				}),
				tap((res) => {
					this.sharedService.executingLoader$.next(false);
				})
			) as Observable<IUsersList>;
	}
}
