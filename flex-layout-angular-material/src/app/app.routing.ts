import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/horizontal',
    pathMatch: 'full'
  },
  {
    path: 'horizontal',
    component: HorizontalComponent,
  },
  {
    path: 'vertical',
    component: VerticalComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }