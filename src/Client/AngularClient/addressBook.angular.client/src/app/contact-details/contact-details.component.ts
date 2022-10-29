import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../shared/addressbook.model';
import { AddressbookService } from '../shared/addressbook.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  @Input() currentContact: Contact = {
    fullName: '',
    email: '',
    address: '',
  };

  constructor(
    private service: AddressbookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getContact(this.route.snapshot.params['id']);
    //this.service.getById(this.route.snapshot.params['id']);
  }

  getContact(id: number): void {
    this.service.getById(id).subscribe({
      next: (data) => {
        this.currentContact.id = data.id;
        this.currentContact.fullName = data.fullName;
        this.currentContact.email = data.email;
        this.currentContact.phoneNumber = data.phoneNumber;
        this.currentContact.address = data.address;
        this.currentContact.addressType = data.addressType;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      fullName: this.currentContact.fullName,
      address: this.currentContact.address,
      email: this.currentContact.email,
      phoneNumber: this.currentContact.phoneNumber,
      addressType: this.currentContact.addressType,
    };

    this.service.update(this.currentContact.id, data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }

  updateTutorial(): void {
    this.service.update(this.currentContact.id, this.currentContact).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }

  deleteTutorial(): void {
    this.service.delete(this.currentContact.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/contacts']);
      },
      error: (e) => console.error(e),
    });
  }
}
