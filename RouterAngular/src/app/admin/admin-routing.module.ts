import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmintemplateComponent } from './admintemplate/admintemplate.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'', component: AdmintemplateComponent},
  {path:'', component: HomeadminComponent, children: [
    {path:'user', component: UserComponent},
    {path:'listproduct', component: ListproductComponent},
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
