import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EachProductComponent } from './each-product/each-product.component';
import { RegistrationComponent } from './getInto/registration/registration.component';
import { SignInComponent } from './getInto/sign-in/sign-in.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AuthGuard } from './guard/auth.guard';
import { YouComponent } from './you/you.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TermsComponent } from './footerComponents/terms/terms.component';
import { AboutUsComponent } from './footerComponents/about-us/about-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent,},
  { path: '', redirectTo: '/main', pathMatch: 'full',  },
  { path: 'product/:title', component: EachProductComponent},
  { path: 'search/:title', component: HomeComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'user', component: UserlistComponent, canActivate: [AuthGuard]},
  { path: 'you', component: YouComponent, canActivate: [AuthGuard]},
  { path: 'myproducts', component: MyproductsComponent, canActivate: [AuthGuard]},
  { path: 'addproduct', component: AddProductComponent, canActivate: [AuthGuard]},
  { path: 'editproduct', component: EditProductComponent, canActivate: [AuthGuard]},
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  { path: 'terms', component: TermsComponent},
  { path: 'about-us', component: AboutUsComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
