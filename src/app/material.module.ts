import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
