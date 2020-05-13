import { ProgressComponent } from './progress/progress.component';
import { GraficasoneComponent } from './graficasone/graficasone.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const PageRoutes: Routes = [
    { path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficauno', component: GraficasoneComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
        ]
    },
];
export const PAGES_ROUTES = RouterModule.forChild(PageRoutes);
