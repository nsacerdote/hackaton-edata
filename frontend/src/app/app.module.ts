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
import {AnimatedShapeComponent} from './game/ui/animated-shape/animated-shape.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewEventComponent } from './admin/new-event/new-event.component';
import { UiElementComponent } from './game/ui/shared/ui-element/ui-element.component';
import { AvatarCircleComponent } from './game/ui/shared/avatar-circle/avatar-circle.component';
import { UiPanelComponent } from './game/ui/shared/ui-panel/ui-panel.component';
import { HealthBarComponent } from './game/ui/shared/health-bar/health-bar.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { SandboxComponent } from './sandbox/sandbox.component';
import { ActorComponent } from './game/scene/actor/actor.component';
import { ProfileComponent } from './profile/profile.component';
import { DialogComponent } from './game/ui/dialog/dialog.component';

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
    UiElementComponent,
    AvatarCircleComponent,
    UiElementComponent,
    UiComponent,
    NewEventComponent,
    UiPanelComponent,
    HealthBarComponent,
    AnimatedShapeComponent,
    SandboxComponent,
    ActorComponent,
    DialogComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DpDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
