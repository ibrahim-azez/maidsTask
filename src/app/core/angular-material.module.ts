import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatPaginatorModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
    MatDividerModule,
    MatProgressBarModule,
    MatIconModule,MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatPaginatorModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
    MatDividerModule,
    MatProgressBarModule,
    MatIconModule,MatButtonModule
  ],
})
export class AngularMaterialModule {}
