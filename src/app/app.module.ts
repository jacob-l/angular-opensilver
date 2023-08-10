import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyFirstComponent } from './components/dummy-first/dummy-first.component';
import { MainComponent } from './components/main/main.component';
import { OpensilverActivatorComponent } from './components/opensilver-activator/opensilver-activator.component';
import { OpensilverComponent } from './components/opensilver/opensilver.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyFirstComponent,
    MainComponent,
    OpensilverActivatorComponent,
    OpensilverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
