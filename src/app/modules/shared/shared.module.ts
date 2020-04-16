import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenderComponent } from './components/gender/gender.component';

import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { GroupByPipe } from './pipes/group-by.pipe';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [GenderComponent, FilterPipe, OrderByPipe, GroupByPipe, AlertComponent],
  exports: [ GenderComponent, AlertComponent, FilterPipe, OrderByPipe, GroupByPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
