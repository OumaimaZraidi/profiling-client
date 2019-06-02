import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { QuestionsComponent } from './admin/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LayoutComponent,
    RegisterComponent,
    PageNotFoundComponent,
    LandingComponent,
    DashboardComponent,
    CategoriesComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
