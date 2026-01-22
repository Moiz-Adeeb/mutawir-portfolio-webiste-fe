import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Permissions, RoleNames, } from '../constants/role-names';
import { AuthGuard } from '../gaurds/auth-gaurd.guard';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'not-found',
        loadChildren: () =>
          import('./not-found/not-found-routing.module').then(
            (p) => p.NotFoundRoutingModule,
          ),
        pathMatch: 'prefix',
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home-routing.module').then((p) => p.HomeRoutingModule),
        pathMatch: 'full',
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services-routing.module').then(
            (p) => p.ServicesRoutingModule,
          ),
        pathMatch: 'full',
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about-routing.module').then(
            (p) => p.AboutRoutingModule,
          ),
        pathMatch: 'full',
      },
      // {
      //   path: 'projects',
      //   loadChildren: () =>
      //     import('./projects/projects-routing.module').then(
      //       (p) => p.ProjectsRoutingModule,
      //     ),
      //   pathMatch: 'full',
      // },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact-routing.module').then(
            (p) => p.ContactRoutingModule,
          ),
        pathMatch: 'full',
      },
      // {
      //   path: 'reset-password',
      //   loadChildren: () =>
      //     import('./reset-password/reset-password-routing.module').then(
      //       (p) => p.ResetPasswordRoutingModule,
      //     ),
      // },
      // {
      //   path: 'sign-up',
      //   loadChildren: () =>
      //     import('./sign-up/sign-up-routing.module').then(
      //       (p) => p.SignUpRoutingModule,
      //     ),
      // },
      // {
      //   path: 'subscription',
      //   loadChildren: () =>
      //     import('./subscription/subscription-routing.module').then(
      //       (p) => p.SubscriptionRoutingModule,
      //     ),
      //   pathMatch: 'prefix',
      //   canActivateChild: [AuthGuard],
      // },
      // {
      //   path: 'chat',
      //   loadChildren: () =>
      //     import('./chat/chat-routing.module').then(
      //       (p) => p.ChatRoutingModule,
      //     ),
      //   pathMatch: 'prefix',
      //   canActivateChild: [AuthGuard],
      //   data: {
      //   }
      // },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: '**',
        redirectTo: 'not-found',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
