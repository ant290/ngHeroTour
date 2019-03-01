import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pull in components from this app
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

//routing sets the components which will be called to life dependant on the URL
const routes: Routes = [
  {path:'', redirectTo:'/dashboard',pathMatch:'full'},
  {path:'heroes', component: HeroesComponent},
  {path:'detail/:id', component: HeroDetailComponent},
  {path:'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
