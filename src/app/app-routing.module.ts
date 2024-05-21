import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MasterlayoutComponent } from './master-layout/master-layout.component';
import { HomeComponent } from './master-layout/home/home.component';
import { AboutComponent } from './master-layout/about/about.component';
import { BlogComponent } from './master-layout/blog/blog.component';
import { CategoriesComponent } from './master-layout/categories/categories.component';
import { ContactusComponent } from './master-layout/contactus/contactus.component';
import { AddToCartComponent } from './master-layout/add-to-cart/add-to-cart.component';
import { AddFavoriteComponent } from './master-layout/add-favorite/add-favorite.component';


const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: '',
    component: MasterlayoutComponent,
    loadChildren: () => import('./master-layout/master-layout.module').then(m => m.MasterLayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
