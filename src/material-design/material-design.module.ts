import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



import {MatDialogModule} from '@angular/material/dialog';


import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatSelectModule,
    MatBadgeModule,
    MatDialogModule

  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatBadgeModule,
    MatDialogModule
  ]


})
export class MaterialDesignModule { }
