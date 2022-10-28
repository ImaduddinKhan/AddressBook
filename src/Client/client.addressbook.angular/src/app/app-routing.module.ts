import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: HomeComponent },
  { path: 'contacts/:id', component: ContactDetailsComponent },
  { path: 'new', component: CreateContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
