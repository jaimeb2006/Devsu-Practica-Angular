import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'product-list',
    loadChildren: () =>
      import('./features/product-list/product-list.module').then(
        (m) => m.ProductListModule
      ),
  },
  {
    path: 'product-registration',
    loadChildren: () =>
      import(
        './features/product-registration/product-registration.module'
      ).then((m) => m.ProductRegistrationModule),
  },
  // Agrega más rutas aquí según sea necesario
  {
    path: '',
    redirectTo: '/product-list',
    pathMatch: 'full',
  },
  // Ruta comodín para manejar rutas no encontradas
  {
    path: '**',
    redirectTo: '/product-list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
