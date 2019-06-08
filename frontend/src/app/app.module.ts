import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { GameComponent } from './game/game.component';
import { SceneComponent } from './game/scene/scene.component';
import { UiComponent } from './game/ui/ui.component';
import { PlayerComponent } from './game/ui/player/player.component';
import { EnemyComponent } from './game/ui/enemy/enemy.component';
import { StepperComponent } from './game/ui/stepper/stepper.component';
import { UiElementComponent } from './game/ui/ui-element/ui-element.component';
import {AnimatedShapeComponent} from "./game/ui/animated-shape/animated-shape.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    GameComponent,
    SceneComponent,
    UiComponent,
    PlayerComponent,
    EnemyComponent,
    StepperComponent,
    UiElementComponent,
    UiComponent,
    AnimatedShapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
