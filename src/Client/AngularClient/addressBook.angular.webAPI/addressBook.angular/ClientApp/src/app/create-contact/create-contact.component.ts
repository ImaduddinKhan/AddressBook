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
    address: '',
  };

  constructor(private _service: AddressbookService) {}

  ngOnInit(): void {}

  saveTutorial(): void {
    const data = {
      fullName: this.contact.fullName,
      phoneNumber: this.contact.phoneNo,
      email: this.contact.email,
      address: this.contact.address,
    };

    this._service.create(data).subscribe({
      next: (res) => {
        this.contact.phoneNo = data.phoneNumber
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }

  newContact(): void {
    this.contact = {
      fullName: '',
      email: '',
      address: '',
    };
  }
}
