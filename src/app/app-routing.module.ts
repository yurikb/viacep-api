import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormContatoComponent } from './components/form-contato/form-contato.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: FormContatoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
