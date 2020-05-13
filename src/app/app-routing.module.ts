import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { GraficasoneComponent } from './pages/graficasone/graficasone.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'graficauno', component: GraficasoneComponent},
      { path: '', pathMatch: 'full', redirectTo: 'dashboard'}
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash : true});
