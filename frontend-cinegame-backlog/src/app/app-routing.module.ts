import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {ProfileComponent} from './profile/profile.component';
import {OverviewComponent} from './overview/overview.component';
import {NewItemComponent} from './new-item/new-item.component';
import {EditItemComponent} from './edit-item/edit-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'overview/:type',
    component: OverviewComponent
  },
  {
    path: 'new-item',
    component: NewItemComponent
  },
  {
    path: 'edit-item',
    component: EditItemComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
