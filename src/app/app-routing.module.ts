import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {LayoutComponent} from './pages/layout/layout.component';
import {RegisterComponent} from './pages/register/register.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {CategoriesComponent} from './admin/categories/categories.component';
import {QuestionsComponent} from './admin/questions/questions.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: 'questions', component: QuestionsComponent}
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
