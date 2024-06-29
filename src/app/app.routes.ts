import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:"login", component:LoginComponent},
    {path:"signup", component:SignupComponent},
    {path:"about", loadComponent:() => import('../app/components/about/about.component').then(mod => mod.AboutComponent), canActivate:[authGuard] },//component:AboutComponent},
    {path:"", redirectTo:'/login', pathMatch:'full'},
];
