import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacts } from '../shared/addressbook.model';
import { AddressBookService } from '../shared/addressbook.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  constructor(public service: AddressBookService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.createContact(form);
  }

  createContact(form: NgForm) {
    this.service.postContact().subscribe(
      res => {
        this.resetForm(form);
        this.service.getContacts();
      },
      error => {
        console.log(error)
      }
    )
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.model = new Contacts();
  }
}

