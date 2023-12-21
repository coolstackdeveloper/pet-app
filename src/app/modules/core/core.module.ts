import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './components/pet/pet.component';

@NgModule({
  declarations: [PetComponent],
  exports: [PetComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
