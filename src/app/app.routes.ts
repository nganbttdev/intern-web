import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, 
    canActivate: [AuthGuard],
    children: [{ path: 'home', component: HomeComponent }],
  },
  {
    path: 'auth',
    canActivate: [NoAuthGuard],
    children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
