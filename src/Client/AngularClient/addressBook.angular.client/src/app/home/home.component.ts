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

  pNo: number = 1;
  pSize?: number = 10;
  totalCount: number = 100;
  fName?: string = '';
  orderBy: string = '';
  isDescSort: boolean = false;

  constructor(
    private service: AddressbookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.pNo = params['pageNumber'] ?? 1;
      this.pSize = params['pageSize'] ?? 10;
      this.fName = params['qName'] ?? '';
      this.orderBy = params['orderBy'] ?? '';
      this.isDescSort = params['isDesc'] == 'true';
    });

    this.retrieveContacts();
  }

  pageChangeEvent(event: any) {
    this.pNo = event;
    this.retrieveContacts();
  }

  retrieveContacts(): void {
    this.service
      .getAllPagiginatedContacts(
        this.pNo,
        this.pSize,
        this.fName,
        this.orderBy,
        this.isDescSort
      )
      .subscribe({
        next: (data) => {
          this.totalCount = data.dataCount;
          this.contacts = data.data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
  }

  search() {
    this.onPageChange();
    this.retrieveContacts();
  }

  sortContacts(event: string) {
    this.orderBy = event;
    // this.orderBy == 'name' ? !this.isDescSort : this.isDescSort ? this.orderBy == 'mobile' ?

    if (this.orderBy == 'name' || this.orderBy == 'mobile')
      this.isDescSort = !this.isDescSort;

    this.onPageChange();
    this.retrieveContacts();
  }

  deleteContact(id: number) {
    this.service.delete(id).subscribe((res) => {
      this.contacts = this.contacts.filter((item) => item.id !== id);
      console.log('Post deleted successfully!');
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

  onPageChange() {
    // complex calculation
    this.router.navigate(['/contacts'], {
      queryParams: {
        pageNumber: this.pNo,
        pageSize: this.pSize,
        qName: this.fName,
        orderBy: this.orderBy,
        isDesc: this.isDescSort,
      },
    });
  }
}
