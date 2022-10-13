import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CaNavbarComponent } from './ca-navbar/ca-navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceUtente } from './service/service-utente';
import { CaRegistrazioneComponent } from './ca-registrazione/ca-registrazione.component';
import { CaLoginComponent } from './ca-login/ca-login.component';
import { CaHomeComponent } from './ca-home/ca-home.component';
import { ServiceEventoDataSettoreService } from './service/service-evento-data-settore.service';
import { CaCardComponent } from './ca-card/ca-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CaNavbarComponent,
    CaRegistrazioneComponent,
    CaLoginComponent,
    CaHomeComponent,
    CaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceUtente,ServiceEventoDataSettoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
