import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateContact } from '../shared/addressbook.model';
import { AddressbookService } from '../shared/addressbook.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  constructor(
    private router: Router,
    public service: AddressbookService,
    private route: ActivatedRoute
  ) {}

  id: number;

  editContact: UpdateContact = {
    fullName: '',
    email: '',
    address: '',
  };
  form!: FormGroup;

  ngOnInit(): void {
    this.service
      .getById(this.route.snapshot.params['id'])
      .subscribe((data: UpdateContact) => {
        this.editContact = data;
      });

    this.form = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      address: new FormControl(''),
      addressType: new FormControl(''),
    });
  }

  submit() {
    const data = {
      id: this.editContact.id,
      fullName: this.editContact.fullName,
      address: this.editContact.address,
      email: this.editContact.email,
      phoneNumber: this.editContact.phoneNumber.toString(),
      addressType: this.editContact.addressType,
    };

    this.service.update(this.editContact.id, data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }

  onEditComplete() {
    this.router.navigate(['/']);
  }
}
