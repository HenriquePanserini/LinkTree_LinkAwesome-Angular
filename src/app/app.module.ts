import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CadastroLinksComponent } from './components/cadastro-links/cadastro-links.component';

//Views
import { HomeComponent } from './views/home/home.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';

import 'bootstrap';
import { BiosEditorComponent } from './components/bios-editor/bios-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CadastroLinksComponent,
    CadastroComponent,
    BiosEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
