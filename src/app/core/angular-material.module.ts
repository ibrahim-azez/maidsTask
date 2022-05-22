import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [MatToolbarModule, MatInputModule, MatPaginatorModule],
  exports: [MatToolbarModule, MatInputModule, MatPaginatorModule],
})
export class AngularMaterialModule {}
