import { NgModule, Type } from '@angular/core';
import { SharedModule } from 'src/app/common/shared';
import { DelonRoutingModule } from './delon-routing.module';
import { CacheComponent } from './cache/cache.component';

const COMPONENTS: Type<void>[] = [CacheComponent];

@NgModule({
  imports: [SharedModule, DelonRoutingModule],
  declarations: COMPONENTS
})
export class DelonModule {}
