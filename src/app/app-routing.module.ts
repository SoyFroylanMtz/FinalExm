import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExamenComponent } from './components/examen/examen.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Elemento1Component } from './elemento1/elemento1.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { Elemento2Component } from './elemento2/elemento2.component';
import { UsersComponent } from './components/users/users.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { Elemento3Component } from './elemento3/elemento3.component';


const routes: Routes = [
  {
    path:'',
    component : AppComponent,
    children:[
      {
        path:'',
        component: ExamenComponent
      },
      {
        path:'inicio', 
        component: InicioComponent
      },
      {
        path:'examen',
        component: ExamenComponent
      },
      {
        path:'navigation',
        component: Elemento1Component
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'peliculas',
        component: Elemento2Component
      },
      {path:'users', component: Elemento3Component },
  {path:'user/:uuid', component: UserdetailComponent },
  {path:'**', redirectTo:'users' }

    ]
      
      
    
    
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
