import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptpageComponent } from './components/adoptpage/adoptpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SupportComponent } from './components/support/support.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'adopt', component: AdoptpageComponent },
  { path: 'help', component: SupportComponent},
  { path: 'signin', component: SigninComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
