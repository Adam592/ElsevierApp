import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScidirRoutingModule } from './scidir-routing.module';
import { ScidirFormComponent } from './components/scidir-form/scidir-form.component';
import { ScidirListComponent } from './components/scidir-list/scidir-list.component';
import { ScidirListElementComponent } from './components/scidir-list-element/scidir-list-element.component';
import { FormsModule } from '@angular/forms';
import { ScidirService } from './services/scidir.service';

@NgModule({
  declarations: [ 
    ScidirFormComponent,
    ScidirListComponent,
    ScidirListElementComponent
  ],
  exports: [
    ScidirFormComponent,
  ],
  imports: [
    CommonModule,
    ScidirRoutingModule,
    FormsModule,
  ],
  providers: [
    ScidirService,
  ]
})
export class ScidirModule { }
