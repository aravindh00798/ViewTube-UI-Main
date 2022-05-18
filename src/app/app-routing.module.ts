import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { FavHolderComponent } from './fav-holder/fav-holder.component';
import { HomeComponent } from './home/home.component';
import { PopularContainerComponent } from './popular/container/popular-container/popular-container.component';
import { SearchInputComponent } from './search/components/search-input/search-input.component';

import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component : HomeComponent},
  {path:'header', component: AppComponent},
  {path:'home/Fav',component:FavHolderComponent},

  {path:"home/popular",component:PopularContainerComponent},
  {path:"home/Categories",component:CategoriesComponent},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {path:'**',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
