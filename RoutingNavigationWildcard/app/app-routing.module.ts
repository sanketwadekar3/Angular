import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendsComponent } from './friends/friends.component';
import { PartyComponent } from './party/party.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';

import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
	{ path : 'friends' , component : FriendsComponent },
	{ path : 'branch' , component : PartyComponent },
	{ path : '' , component : FriendsComponent },
	{ path : '**' , component : InvalidPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
