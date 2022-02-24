import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { V1Component } from './v1/v1.component';

const COMPONENTS: Type<void>[] = [V1Component];

@NgModule({
  imports: [SharedModule, DashboardRoutingModule],
  declarations: COMPONENTS
})
export class DashboardModule {}
