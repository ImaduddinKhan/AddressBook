import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from '../shared/addressbook.model';
import { AddressBookService } from '../shared/addressbook.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: AddressBookService, private router: Router) { }

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

  navigateToEditContact(id: number) {
    this.router.navigate(["/edit", id, "edit"], {
    });
  }

  searchbyname: any = '';
  searchbyphone = '';
}
