import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AuthComponent, AdminComponent],
  imports: [
    CommonModule,FormsModule, AdminRoutingModule
  ]
})
export class AdminModule { }
