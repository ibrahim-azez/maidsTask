import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from '../../features/user/interfaces/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  user!: IUser;
  @Input() user$ = new Subject<IUser>();

  ngOnInit(): void {
    this.user$.subscribe({
      next: (res) => {
        this.user = res;
      },
    });
  }
}
