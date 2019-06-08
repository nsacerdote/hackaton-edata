import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { GameComponent } from './game/game.component';
import { SceneComponent } from './game/scene/scene.component';
import { UiComponent } from './game/ui/ui.component';
import {FormsModule} from '@angular/forms';
import { ButtonComponent } from './core/button/button.component';
import { PlayerComponent } from './game/ui/player/player.component';
import { EnemyComponent } from './game/ui/enemy/enemy.component';
import { StepperComponent } from './game/ui/stepper/stepper.component';
import { UiElementComponent } from './game/ui/ui-element/ui-element.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    GameComponent,
    SceneComponent,
    UiComponent,
    ButtonComponent,
    PlayerComponent,
    EnemyComponent,
    StepperComponent,
    UiElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
