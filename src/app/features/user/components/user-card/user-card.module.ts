import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserCardComponent } from './user-card.component';
import { AngularMaterialModule } from '../../../../core/angular-material.module';

const routes: Routes = [
  {
    path: '',
    component: UserCardComponent,
  },
];

@NgModule({
  declarations: [UserCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AngularMaterialModule],
})
export class UserCardModule {}
