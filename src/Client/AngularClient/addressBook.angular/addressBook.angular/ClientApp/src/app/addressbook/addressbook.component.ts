import { Component, OnInit } from '@angular/core';
import { Contacts } from '../shared/addressbook.model';
import { AddressBookService } from '../shared/addressbook.service';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styles: [
  ]
})
export class AddressbookComponent implements OnInit {

  constructor(public service: AddressBookService) { }

  ngOnInit(): void {
    this.service.getContacts();
  }

  

  populateForm(selectedRecords: Contacts) {
    this.service.model = Object.assign({}, selectedRecords);
  }

  onDelete(id: number) {
    this.service.deleteContact(id).subscribe(
      res => {
        this.service.getContacts();
      },
      err => {
        console.log(err);
      }
    )
  }
  search = '';
}
