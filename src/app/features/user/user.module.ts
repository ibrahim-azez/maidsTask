import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../../core/angular-material.module';

const routes: Routes = [
  {
    path: ':id',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/user-card/user-card.module').then(
        (m) => m.UserCardModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), AngularMaterialModule],
})
export class UserModule {}
