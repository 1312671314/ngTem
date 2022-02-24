

import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ModuleThreeRoutingModule} from './module-three-routing.module';
import { PageListComponent} from './page-list/list.component';
import { PageAddComponent} from './page-add/add.component';
import { PageEditComponent} from './page-edit/edit.component';

const COMPONENTS: Type<void>[] = [
  PageListComponent,
  PageAddComponent,
  PageEditComponent
];

@NgModule({
  imports: [SharedModule, ModuleThreeRoutingModule],
  declarations: COMPONENTS
})
export class ModuleThreeModule {}

