import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinciasModule } from './provincias/provincias.module';

const routes: Routes = [
  {
    path:'selector',
    loadChildren:() => import('./provincias/provincias.module').then(m=>ProvinciasModule)
  },

  {path:'', pathMatch:'full', redirectTo:'selector'},
  {path:'**', pathMatch:'full', redirectTo:'selector'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
