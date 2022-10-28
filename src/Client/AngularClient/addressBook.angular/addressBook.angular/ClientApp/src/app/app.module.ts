import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterNamePipe } from './home/filter.pipe';
import { FilterPhonePipe } from './home/filter.pipe.phone';
import { HomeComponent } from './home/home.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    FilterNamePipe,
    HomeComponent,
    EditContactComponent,
    FilterPhonePipe,
    CreateContactComponent,
    ContactDetailComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
