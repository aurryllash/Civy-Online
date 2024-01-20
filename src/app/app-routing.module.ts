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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full',  },
  { path: 'product/:title', component: EachProductComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'user', component: UserlistComponent, canActivate: [AuthGuard]},
  { path: 'you', component: YouComponent, canActivate: [AuthGuard]},
  { path: 'myproducts', component: MyproductsComponent, canActivate: [AuthGuard]},
  { path: 'addproduct', component: AddProductComponent, canActivate: [AuthGuard]},
  { path: 'editproduct', component: EditProductComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
