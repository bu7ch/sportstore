import { NgModule } from "@angular/core";
import { RouterModule,Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path:'auth', component:AuthComponent },
  { path:'main', component:AdminComponent, canActivate:[AuthGuard] },
  { path:'**', redirectTo: "auth" },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AdminRoutingModule {}
