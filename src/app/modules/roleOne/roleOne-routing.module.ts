import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('../../pages/common/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { preload: true }
  },
  { path: 'module-one',loadChildren: () => import('../../pages/module-one/module-one.module').then(m => m.ModuleOneModule) },
  { path: 'module-two',loadChildren: () => import('../../pages/module-two/module-two.module').then(m => m.ModuleTwoModule) },
  { path: 'module-three',loadChildren: () => import('../../pages/module-three/module-three.module').then(m => m.ModuleThreeModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleOneRoutingModule {}
