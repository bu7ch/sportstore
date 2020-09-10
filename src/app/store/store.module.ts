import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { ModelModule } from '../model/model.module';
import { FormsModule } from '@angular/forms';
import { CounterDirective } from './counter.directive';
 

@NgModule({
  declarations: [StoreComponent, CounterDirective],
  imports: [CommonModule, ModelModule, BrowserModule, FormsModule],
  exports: [StoreComponent],
})
export class StoreModule {}
