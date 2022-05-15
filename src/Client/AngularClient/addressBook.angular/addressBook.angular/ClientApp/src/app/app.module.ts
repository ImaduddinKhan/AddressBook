import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressbookComponent } from './addressbook/addressbook.component';
import { AddressbookFormComponent } from './addressbook/addressbook-form/addressbook-form.component';
import { FilterPipe } from './addressbook/addressbook-form/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddressbookComponent,
    AddressbookFormComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
