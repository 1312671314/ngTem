import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V1Component} from './v1/v1.component';

const routes: Routes = [
   { path: '', component: V1Component },
  { path: 'v1', component: V1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}


