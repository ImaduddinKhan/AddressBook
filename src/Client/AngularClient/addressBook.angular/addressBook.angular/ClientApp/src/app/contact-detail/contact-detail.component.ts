import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailContact } from '../shared/addressbook.model';
import { AddressBookService } from '../shared/addressbook.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(private service: AddressBookService, private route: ActivatedRoute, private router: Router) { }


  @Input() currentContact: DetailContact = {
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.goToDetails(+id);
    });
  }

  goToDetails(id: number) {
    return this.service.getById(id).subscribe(
      res => {
        next: (data) => {
          this.currentContact.fullName = data.fullName;
          console.log(data);
        }
      },
      err => {
        console.log(err);
      }
    )
  }
}
