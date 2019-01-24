import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule , Routes} from '@angular/router';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const appRoutes: Routes = [
  {path: 'accomodation', component: AccomodationComponent},
  {path: 'celebration', component : CelebrationsComponent },
  {path: 'food-and-beverage', component : FoodAndBeverageComponent},
  {path : 'lifestyle', component : LifestyleComponent},
  {path:  'offers', component : OffersComponent},
  {path: 'weddings', component: WeddingsComponent},
  {path: 'signin' , component: SigninComponent},
  {path: 'signup', component: SignupComponent}
 ] ;

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }