import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyFirstComponent } from './components/dummy-first/dummy-first.component';
import { MainComponent } from './components/main/main.component';
import { OpensilverActivatorComponent } from './components/opensilver-activator/opensilver-activator.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'dummy-first', component: DummyFirstComponent },
  { path: 'opensilver', component: OpensilverActivatorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
