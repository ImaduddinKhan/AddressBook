import { Component, OnInit } from '@angular/core';
import { Form, FormsModule, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateContact } from '../shared/addressbook.model';
import { AddressbookService } from '../shared/addressbook.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(private router: Router, public service: AddressbookService, private route: ActivatedRoute) { }

  id!: number;
  editContact: UpdateContact = {
    fullName: '',
    email: '',
    address: '',
  };
  form!: FormGroup;

  ngOnInit(): void {
    this.service.getById(this.route.snapshot.params["id"]).subscribe((data: UpdateContact) => {
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
    console.log(this.form.value);
    this.service.update(this.id, this.form.value).subscribe((res: any) => {
      console.log('Post updated successfully!');
      this.router.navigateByUrl('/contacts');
    })
  }

  onEditComplete(id: number) {
    this.router.navigate(["/contacts"], {
    });
  }
}
