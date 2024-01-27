import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegiesterComponent } from './regiester/regiester.component';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard] ,component:HomeComponent},
  {path:'people', canActivate:[AuthGuard] ,component:PeopleComponent},
  {path:'movies', canActivate:[AuthGuard] ,component:MoviesComponent},
  {path:'tvshows', canActivate:[AuthGuard] ,component:TvshowsComponent},
  {path:'details/:id/:type', canActivate:[AuthGuard] ,component:DetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'regiester',component:RegiesterComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
