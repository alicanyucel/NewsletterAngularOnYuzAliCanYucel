import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { CheckInputValidDirective } from './directives/check-input-valid.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonInterceptor } from './interceptors/common.interceptor';
import { NewsletterComponent } from './components/newsletter/newsletter/newsletter.component';
import { NodeWithI18n } from '@angular/compiler';
import { AuthGuard } from './guards/auth.guard';
import { AddComponent } from './components/newsletter/add/add/add.component';
import { NewsletterPipe } from './components/pipes/newsletter.pipe';
import { UpdateComponent } from './components/newsletter/update/update/update.component';
const routes: Routes = [
  {
    path: "",
    component: NewsletterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "add",
    component: AddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "update/:value",
    component: UpdateComponent,
    canActivate: [AuthGuard]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CheckInputValidDirective,
    NewsletterComponent,
    AddComponent,
    NewsletterPipe,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
    }),
    RouterModule.forRoot(routes),
   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}