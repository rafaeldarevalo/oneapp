import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {InboxComponent} from './components/inbox/inbox.component';
import {AuthorizeComponent} from './components/authorize/authorize.component';
import {LoginAdminComponent} from './components/admin/login-admin/login-admin.component';
import {UploadComponent} from './components/admin/upload/upload.component';

const routes: Routes = [
  {path: 'home', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'inbox', component: InboxComponent},
  {path: 'authorize', component: AuthorizeComponent},
  {path: 'admin', component: LoginAdminComponent },
  {path: 'upload', component: UploadComponent },

  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
