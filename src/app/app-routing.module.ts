import { ItemComponent } from './component/pages/item/item.component';
import { CoreModule } from './component/core/core.module';
import { ListItemComponent } from './component/pages/list-item/list-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products',  component: ListItemComponent },
  { path: 'product/edit/:id', component: ItemComponent },
  { path: 'product/create', component: ItemComponent }
];

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
