import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  pNo: number = 0;
  pSize?: number = 100;

  constructor(
    private service: AddressbookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.retrieveContacts();
    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });
    this.route.queryParams.subscribe((params) => {
      this.pNo = params['pageNumber'];
      this.pSize = params['pageSize'];
    });
  }

  pageChangeEvent(event: any) {
    this.pNo = event;
    this.retrieveContacts();
  }

  retrieveContacts(): void {
    this.service.getAllPagiginatedContacts(this.pNo, this.pSize).subscribe({
      next: (data) => {
        //
        // this.pSize = data.dataCount;
        this.contacts = data.data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  deleteContact(id: number) {
    this.service.delete(id).subscribe((res) => {
      this.contacts = this.contacts.filter((item) => item.id !== id);
      console.log('Post deleted successfully!');
    });
  }

  // removeAllContacts(): void {
  //   this.service.deleteAll().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.refreshList();
  //     },
  //     error: (e) => console.error(e),
  //   });
  // }

  onViewContact(id: number) {
    // complex calculation
    this.router.navigate(['/contacts', 'view', id]);
  }

  onEditContact(id: number) {
    // complex calculation
    this.router.navigate(['/contacts', 'edit', id]);
  }
  onPageChange() {
    // complex calculation
    this.router.navigate(['/contacts'], {
      queryParams: { pageNumber: this.pNo, pageSize: this.pSize },
    });
  }
}
