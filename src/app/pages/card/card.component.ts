import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { IUser } from '../../features/user/interfaces/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent   {

  @Input() user$ = new Subject<IUser>();


}
