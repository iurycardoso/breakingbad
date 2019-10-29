import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { SurpresaComponent } from './surpresa/surpresa.component';



const routes: Routes = [
  {
    path: '', component: CharactersComponent
  },
  {
    path: 'characters', component: CharactersComponent

  },
  {
    path: 'surpresa', component: SurpresaComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
