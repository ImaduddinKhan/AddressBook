import { Component, OnInit } from '@angular/core';
import { AddContact } from '../shared/addressbook.model';
import { AddressbookService } from '../shared/addressbook.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent implements OnInit {
  contact: AddContact = {
    fullName: '',
    email: '',
    phoneNo: '',
    address: '',
  };
  submitted = false;

  constructor(private _service: AddressbookService) {}

  ngOnInit(): void {}

  saveTutorial(): void {
    const data = {
      name: this.contact.fullName,
      email: this.contact.email,
      phone: this.contact.phoneNo,
      address: this.contact.address,
    };

    this._service.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newContact(): void {
    this.submitted = false;
    this.contact = {
      fullName: '',
      email: '',
      phoneNo: '',
      address: '',
    };
  }
}
