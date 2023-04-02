import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatterialUiModule } from 'src/matterial-ui/matterial-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatterialUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
