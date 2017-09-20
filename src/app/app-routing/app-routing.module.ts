import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Client1Component } from '../client1/client1.component';
import { Client2Component } from '../client2/client2.component';

const routes: Routes = [
	{ path: '', redirectTo: 'client1', pathMatch: 'full' },
	{ path: 'client1', component: Client1Component },
	{ path: 'client2', component: Client2Component }
];

import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forRoot(routes/*, { enableTracing: true }*/)
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
