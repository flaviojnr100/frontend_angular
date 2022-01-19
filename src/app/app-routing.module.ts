import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/service/auth-guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views/menu/menu.component';
import { CreateComponent } from './views/pessoa/create/create.component';
import { PessoaComponent } from './views/pessoa/pessoa.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    

  },
  {
    path:'dashboard',
    component:MenuComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"pessoa",
    component:PessoaComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path:"dia",
    component:CreateComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
