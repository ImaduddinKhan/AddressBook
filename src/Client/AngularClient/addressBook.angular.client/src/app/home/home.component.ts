import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../shared/addressbook.model';
import { AddressbookService } from '../shared/addressbook.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contacts: Contact[];

  currentIndex = -1;
  fullName = '';

  constructor(private service: AddressbookService, private router: Router) {}

  ngOnInit(): void {
    this.retrieveContacts();
  }

  retrieveContacts(): void {
    this.service.getAll().subscribe({
      next: (data) => {
        this.contacts = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveContacts();
    this.currentIndex = -1;
  }

  deleteContact(id: number) {
    this.service.delete(id).subscribe((res) => {
      this.contacts = this.contacts.filter((item) => item.id !== id);
      console.log('Post deleted successfully!');
    });
  }

  removeAllContacts(): void {
    this.service.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }

  onViewContact(id: number) {
    // complex calculation
    this.router.navigate(['/contacts', 'view', id]);
  }

  onEditContact(id: number) {
    // complex calculation
    this.router.navigate(['/contacts', 'edit', id]);
  }
}
