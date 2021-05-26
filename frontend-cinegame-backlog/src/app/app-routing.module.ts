import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.component').then(m => m.OverviewComponent)
  },
  {
    path: 'new-item',
    loadChildren: () => import('./new-item/new-item.component').then(m => m.NewItemComponent)
  },
  {
    path: 'edit-item',
    loadChildren: () => import('./edit-item/edit-item.component').then(m => m.EditItemComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
