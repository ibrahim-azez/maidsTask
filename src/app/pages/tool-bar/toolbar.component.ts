import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	EventEmitter,
	Output
} from '@angular/core';
import { Subject, switchMap, Observable } from 'rxjs';
import { SharedService } from '@core/data-access/services/shared.service';
import { UnsubscribeOnDestroyAdapter } from '@core/unsubscribe-on-destroy.adapter';
import { UserService } from '@features/user/data-access/user.service';
import { IUser } from '@features/user/interfaces/user';
import { IUserCard } from '@features/user/interfaces/user-card';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent
	extends UnsubscribeOnDestroyAdapter
	implements OnInit
{
	@Output() userOutputEvent = new EventEmitter<IUser>();
	userOutput$!: Observable<IUserCard>;
	userInput$ = new Subject<string>();

	constructor(
		private userService: UserService,
		private sharedService: SharedService
	) {
		super();
	}


	ngOnInit(): void {
		this.userOutput$ = this.userInput$.pipe(
			switchMap((userId) => {
				this.sharedService.executingLoader$.next(false);
				return this.userService.getUserById(userId);
			})
		);

		this.subs.sink = this.userOutput$.subscribe({
			next: ({ data }) => {
				this.userOutputEvent.emit({ ...data } as IUser);
			},
		});
	}

	searchForUser(userId: string) {
		this.userInput$.next(userId);
	}
}
