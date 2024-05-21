import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterlayoutComponent } from './master-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddFavoriteComponent } from './add-favorite/add-favorite.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  { path: 'contactus', component: ContactusComponent },
  { path: 'addto-cart', component: AddToCartComponent },
  { path: 'add-favorite', component: AddFavoriteComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterLayoutRoutingModule { }
