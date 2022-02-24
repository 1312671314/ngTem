

import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ModuleTwoRoutingModule} from './module-two-routing.module';
import { PageListComponent} from './page-list/list.component';
import { PageAddComponent} from './page-add/add.component';
import { PageEditComponent} from './page-edit/edit.component';

const COMPONENTS: Type<void>[] = [
  PageListComponent,
  PageAddComponent,
  PageEditComponent
];

@NgModule({
  imports: [SharedModule, ModuleTwoRoutingModule],
  declarations: COMPONENTS
})
export class ModuleTwoModule {}

