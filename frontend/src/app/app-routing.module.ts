import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import {NewEventComponent} from './admin/new-event/new-event.component';
import {SandboxComponent} from "./sandbox/sandbox.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/new-event', component: NewEventComponent},
  { path: 'game', component: GameComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'sandbox', component: SandboxComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
