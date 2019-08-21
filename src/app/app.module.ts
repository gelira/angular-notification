import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDependenciasModule } from './material-dependencias.module';
import { ContainerComponent } from './components/container/container.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDependenciasModule
  ],
  entryComponents: [
    NotificationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
