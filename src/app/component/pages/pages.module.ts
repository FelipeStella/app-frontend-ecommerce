import { PipesModule } from '../pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { ItemService } from './../../services/item.service';
import { ItemComponent } from './item/item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ItemComponent,
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    PipesModule,
    MatCardModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ItemComponent,
    ListItemComponent
  ],
  providers: [ItemService]
})
export class PagesModule { }
