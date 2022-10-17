import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaHomeComponent } from './ca-home/ca-home.component';
import { CaLoginComponent } from './ca-login/ca-login.component';
import { CaPrenotazioneComponent } from './ca-prenotazione/ca-prenotazione.component';
import { CaProfiloComponent } from './ca-profilo/ca-profilo.component';
import { CaRegistrazioneComponent } from './ca-registrazione/ca-registrazione.component';

const routes: Routes = [
  { path: 'registrazione', component: CaRegistrazioneComponent },
  { path: 'login', component: CaLoginComponent },
  { path: 'home', component: CaHomeComponent },
  { path: 'prenotazione/:id', component: CaPrenotazioneComponent },
  { path: 'profilo', component: CaProfiloComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
