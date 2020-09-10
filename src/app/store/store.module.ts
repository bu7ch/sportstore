import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { ModelModule } from '../model/model.module';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule, ModelModule, FormsModule,
  ]
})
export class StoreModule { }
