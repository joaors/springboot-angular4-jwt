import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';

import { authHttpFactory } from './auth/auth-http.factory';
import { AuthGuard } from './auth/auth.guard';
import { AppComponent } from './app.component';
import { AlunosListComponent } from './alunos/alunos-list.component';
import { AlunoFormComponent } from './alunos/aluno-form/aluno-form.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { Config } from './common/config';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    AlunosListComponent,
    AlunoFormComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [
    Config,
    AuthGuard,
    {        
      provide: AuthHttp,
      useFactory: authHttpFactory,
      deps: [Http]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
