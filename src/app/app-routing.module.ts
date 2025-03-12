import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipesDetalisComponent } from './recipes-detalis/recipes-detalis.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'recipe/:id', component:RecipesDetalisComponent
  },
  {
    path:'**', component:NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
