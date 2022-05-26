import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../data-access/user.service';
import { IUser } from '../../interfaces/user';

@Component({
	selector: 'app-user-card',
	templateUrl: './user-card.component.html',
	styleUrls: ['./user-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent implements OnInit {
	userCard$ = new ReplaySubject<IUser>().asObservable();
	userId = this.activatedRoute.params;

	constructor(
		private activatedRoute: ActivatedRoute,
		private userService: UserService,
		private location: Location
	) {}

	ngOnInit(): void {
		this.userCard$ = this.userId.pipe(
			switchMap(({ id }) => {
				return this.userService.getUserById(id, true).pipe(
					map(({ data }) => {
						return { ...data };
					})
				);
			})
		);
	}

	goBack() {
		this.location.back();
	}
}
