import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { HometemplateComponent } from './hometemplate/hometemplate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    HomepageComponent,
    AboutComponent,
    HometemplateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomepageComponent,
    AboutComponent,
    HometemplateComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class HomeModule { }
