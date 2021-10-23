import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmintemplateComponent } from './admintemplate/admintemplate.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AdmintemplateComponent,
    HomeadminComponent,
    ListproductComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AdmintemplateComponent,
    HomeadminComponent,
    ListproductComponent,
    UserComponent
  ]
})
export class AdminModule { }
