import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacts } from '../../shared/addressbook.model';
import { AddressBookService } from '../../shared/addressbook.service';

@Component({
  selector: 'app-addressbook-form',
  templateUrl: './addressbook-form.component.html',
  styles: [
  ]
})
export class AddressbookFormComponent implements OnInit {

  constructor(public service: AddressBookService) { }

  ngOnInit(): void {

  }

  public createButtonClicked: boolean = false;

  toggleShowForm(): void {
    this.createButtonClicked = !this.createButtonClicked;
    console.log(this.createButtonClicked);
  }

  onSubmit(form: NgForm) {
    if (this.service.model.id == 0)
      this.createContact(form);
    else
      this.updateContact(form);
  }

  updateContact(form: NgForm) {
    this.service.putContact().subscribe(
      result => {
        this.resetForm(form);
        this.service.getContacts();
      },
      error => {
        console.log(error)
      }
    )
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
