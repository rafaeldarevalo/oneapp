import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { AuthorizeComponent } from './components/authorize/authorize.component';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { UploadComponent } from './components/admin/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    InboxComponent,
    AuthorizeComponent,
    LoginAdminComponent,
    AdminHeaderComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
