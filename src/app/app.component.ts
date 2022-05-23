import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
} from '@angular/core';
import { CardComponent } from '@pages/card/card.component';
import { Subject, BehaviorSubject } from 'rxjs';
import { SharedService } from './core/data-access/services/shared.service';
import { IUser } from './features/user/interfaces/user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	user$ = new Subject<IUser>();
	executingLoader$!: BehaviorSubject<boolean>;

	constructor(
		public sharedService: SharedService,
		private cdref: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.executingLoader$ = this.sharedService.executingLoader$;
		// ɵmarkDirty(AppComponent);
		this.cdref.detectChanges();
	}

	searchedUser(user: IUser): void {
		this.user$.next(user);
	}
}
