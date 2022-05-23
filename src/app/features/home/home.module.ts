import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

// import { ToolbarComponent } from 'src/app/pages/tool-bar/toolbar.component';
import { UserListComponent } from '../user/components/user-list/user-list.component';
import { AngularMaterialModule } from 'src/app/core/angular-material.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, UserListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AngularMaterialModule],
})
export class HomeModule {}
