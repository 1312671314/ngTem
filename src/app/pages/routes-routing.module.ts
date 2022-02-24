import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadOptionalModules } from '@delon/theme';
import { environment } from '@env/environment';
import { LayoutBasicComponent } from '../common/layout/basic/basic.component';
import { AuthGuard } from '../common/services/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: {},
    children: [
      {
        path:'',
        redirectTo:'roleOne',
        pathMatch: 'full'
      },
      {
        path:'roleOne',
        loadChildren: () => import('../modules/roleOne/roleOne.module').then(m => m.RoleOneModule),
        data: { preload: true }
      },
    ]
  },
  {
    path: 'passport',
    loadChildren: () => import('../../app/pages/common/passport/passport.module').then(m => m.PassportModule),
    canActivate: [AuthGuard],
    data: { preload: true }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  providers: [PreloadOptionalModules],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      scrollPositionRestoration: 'top',
      preloadingStrategy: PreloadOptionalModules
    })
  ],
  exports: [RouterModule]
})
export class RouteRoutingModule {}
