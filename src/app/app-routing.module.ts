import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokeapi', 
    pathMatch: 'full'
  },
  {
    path: 'pokeapi',
    loadChildren: () => import('./pokeapi/pokeapi.module').then(m => m.PokeapiModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
