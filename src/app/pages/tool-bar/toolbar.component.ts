import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';
import { Subject, switchMap, Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../../features/user/data-access/user.service';
import { IUser } from '../../features/user/interfaces/user';
import { IUserCard } from '../../features/user/interfaces/user-card';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
  @Output() userOutputEvent = new EventEmitter<IUser>();
  userOutput$!: Observable<IUserCard>;
  userInput$ = new Subject<string>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userOutput$ = this.userInput$.pipe(
      switchMap((userId) => {
        return this.userService.getUser(userId).pipe(
          catchError(() => {
            return EMPTY;
          })
        );
      })
    );

    this.userOutput$.subscribe({
      next: ({ data }) => {
        this.userOutputEvent.emit({ ...data } as IUser);
      },
    });
  }

  searchForUser(userId: string) {
    this.userInput$.next(userId);
  }
}
