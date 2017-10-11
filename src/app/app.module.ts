import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { ArtComponent } from './art/art.component';
import { ArtListComponent } from './art/art-list/art-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    ArtComponent,
    ArtListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
