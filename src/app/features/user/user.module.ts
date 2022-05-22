import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user/:id',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/user-card/user-card.module').then(
        (m) => m.UserCardModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
