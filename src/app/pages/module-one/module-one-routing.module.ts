import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent} from './page-list/list.component';
import { PageAddComponent} from './page-add/add.component';
import { PageEditComponent} from './page-edit/edit.component';

const routes: Routes = [
   { path: '', component: PageListComponent },
  { path: 'page-list', component: PageListComponent },
  { path: 'page-add', component: PageAddComponent },
  { path: 'page-edit', component: PageEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleOneRoutingModule {}


