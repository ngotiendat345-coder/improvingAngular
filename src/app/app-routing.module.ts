import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RouterModule, Routes } from '@angular/router';
// //import { AdminModule } from './admin-component/admin.module';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  //   path: 'articles',
  //   //loadChildren: './article-list/article.module#ArticleModule',
  //   loadChildren: () =>
  //     import('./article-list/article.module').then((m) => m.ArticleModule),
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./admin-component/admin.module').then((m) => m.AdminModule),
  //   //    loadChildren: './admin-component/admin.module#AdminModule',
  // },
  // {
  //   path: '',
  //   component: ,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
