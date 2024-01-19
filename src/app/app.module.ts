import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './getInto/registration/registration.component';
import { SignInComponent } from './getInto/sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { EachProductComponent } from './each-product/each-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { YouComponent } from './you/you.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    SignInComponent,
    HeaderComponent,
    EachProductComponent,
    UserlistComponent,
    YouComponent,
    MyproductsComponent,
    UpdatepopupComponent,
    AddProductComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
