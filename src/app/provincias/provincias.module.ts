import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvinciasRoutingModule } from './provincias-routing.module';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    ProvinciasRoutingModule,
    ReactiveFormsModule
  ],
  exports:[

  ]
})
export class ProvinciasModule { }
