import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../data-access/user.service';
import { IUsersList } from '../../interfaces/users-list';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
	usersList$ = new Observable<IUsersList>();

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.getUsersList();
	}

	getUsersList(pageIndex?: number): void {
		this.usersList$ = this.userService.getUsersList(pageIndex?.toString());
	}
}
