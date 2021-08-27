import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { JurosSimplesComponent } from './juros-simples/juros-simples.component';
import { JurosCompostoComponent } from './juros-composto/juros-composto.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'juros-simples', component: JurosSimplesComponent },
      { path: 'juros-composto', component: JurosCompostoComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    HomeComponent,
    JurosSimplesComponent,
    JurosCompostoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
