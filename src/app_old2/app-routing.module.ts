import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageJokesComponent } from './components/page-jokes/page-jokes.component';
import { PageLangComponent } from './components/page-lang/page-lang.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'joke',
    pathMatch: 'full'
  },
  {
    path: 'joke',
    component: PageJokesComponent
  },
  {
    path: 'lang',
  component: PageLangComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
