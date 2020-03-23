import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageJokeComponent } from './components/page-joke/page-joke.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'joke',
    pathMatch: 'full'
  },
  {
    path: 'joke',
    component: PageJokeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
