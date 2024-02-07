import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyDetailsComponent } from './Components/policy-details/policy-details.component';
import { PolicyComponent } from './Components/policy/policy.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:"policyDetails", component:PolicyDetailsComponent},
  {path:"policy", component:PolicyComponent},
  // {path:"", component:NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


