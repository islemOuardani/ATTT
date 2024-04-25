import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RdvComponent } from './rdv/rdv.component';
import { AtttComponent } from './attt/attt.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CodeComponent } from './code/code.component';
import { ServiceComponent } from './service/service.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LogoComponent,
    AboutComponent,
    ContactComponent,
    RdvComponent,
    AtttComponent,
    AuthentificationComponent,
    CodeComponent,
    ServiceComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
