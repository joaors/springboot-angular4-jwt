import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AlunoFormComponent } from './alunos/aluno-form/aluno-form.component';
import { AlunosListComponent } from './alunos/alunos-list.component';
import { LoginComponent } from './login/login.component';
import { HOME_ROUTES } from './home/home.routes';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent},   
    { path: '', component: LoginComponent},
    ...HOME_ROUTES

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);