import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HometemplateComponent } from './hometemplate/hometemplate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'',component: HometemplateComponent},
  {path:'', component: HomepageComponent, children: [
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'about', component: AboutComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
