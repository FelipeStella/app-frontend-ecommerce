import { FormatQuantityPipe } from './format-quantity/format-quantity.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FormatQuantityPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatQuantityPipe
  ]
})
export class PipesModule { }
