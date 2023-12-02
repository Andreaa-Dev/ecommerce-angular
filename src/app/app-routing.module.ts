import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FavoriteProductsComponent } from './favorite-products/favorite-products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'favorite',
    component: FavoriteProductsComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
