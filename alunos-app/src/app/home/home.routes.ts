import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { AlunosListComponent } from '../alunos/alunos-list.component';
import { AuthGuard } from '../auth/auth.guard';

export const HOME_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },  
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'aluno-list',
            component: AlunosListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'aluno-form',
            component: AlunoFormComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'aluno-form/:id',
            component: AlunoFormComponent,
            canActivate: [AuthGuard]
          }          
        ]
      }
    ];