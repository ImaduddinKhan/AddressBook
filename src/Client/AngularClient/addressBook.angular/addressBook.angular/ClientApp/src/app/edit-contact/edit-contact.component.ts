import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacts } from '../shared/addressbook.model';
import { AddressBookService } from '../shared/addressbook.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(private router: Router, public service: AddressBookService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.editContact(this.route.params['id'])
  }

  onSubmit(form: NgForm) {
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

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.model = new Contacts();
  }

  editContact(id: number) {
    this.service.getById(id).subscribe(
      res => {
        next: (data) => {
          console.log(data);
        }
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
}
