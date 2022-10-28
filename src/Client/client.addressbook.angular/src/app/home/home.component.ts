import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/addressbook.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  contact: Contact[];

  contacts = [
    {
      id: 'c1',
      fullName: 'Name 1',
      email: 'Two@test',
      phoneNo: '12213',
      address: 'address 1',
      addressType: 'home',
    },
    {
      id: 'c2',
      fullName: 'Name 2',
      email: 'igeTwo@test',
      phoneNo: '23213',
      address: 'the address 2',
      addressType: 'home',
    },
    {
      id: 'c3',
      fullName: 'Name 3',
      email: 'ige@test',
      phoneNo: '111213',
      address: 'address 3',
      addressType: 'home',
    },
  ];
  ngOnInit(): void {}
}
