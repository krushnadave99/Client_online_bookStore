import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MasterLayoutRoutingModule } from "./master-layout-routing.module";
import {
  GoogleSigninButtonModule,
  SocialLoginModule,
} from "@abacritt/angularx-social-login";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
// import { MasterlayoutComponent } from "./master-layout.component";
import { HomeComponent } from "./home/home.component";
import { CustomersreviewComponent } from "./customersreview/customersreview.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { CategoriesComponent } from "./categories/categories.component";
import { BlogComponent } from "./blog/blog.component";
import { AboutComponent } from "./about/about.component";
import { AddToCartComponent } from "./add-to-cart/add-to-cart.component";
import { AddFavoriteComponent } from "./add-favorite/add-favorite.component";
import { FormsModule } from "@angular/forms";
import { MasterlayoutComponent } from "./master-layout.component";

@NgModule({
  declarations: [
    HomeComponent,
    CustomersreviewComponent,
    ContactusComponent,
    CategoriesComponent,
    BlogComponent,
    AboutComponent,
    AddToCartComponent,
    AddFavoriteComponent,
    HeaderComponent,
    FooterComponent,
    MasterlayoutComponent
  ],
  imports: [
    CommonModule,
    MasterLayoutRoutingModule,
    // SocialLoginModule,
    GoogleSigninButtonModule,
    FormsModule
  ],
  providers: [],
})
export class MasterLayoutModule { }
