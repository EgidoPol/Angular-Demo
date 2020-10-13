import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
 
  {path: 'auth', component: AuthComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'courses', component: CoursesComponent},
  {path: '', pathMatch: 'full', redirectTo: 'courses'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
