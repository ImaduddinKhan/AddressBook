import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AddContact,
  Contact,
  UpdateContact,
  ViewContact,
} from './addressbook.model';

@Injectable({
  providedIn: 'root',
})
export class AddressbookService {
  constructor(private http: HttpClient) {}

  readonly _baseUrl = 'https://localhost:44384/api/AddressBook';
  contactModel: Contact;
  addContactModel: AddContact;
  updateContact: UpdateContact;
  contactDetail: ViewContact;

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this._baseUrl);
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${this._baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this._baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this._baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this._baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this._baseUrl);
  }

  findByTitle(title: any): Observable<Contact[]> {
    return this.http.get<any[]>(`${this._baseUrl}?title=${title}`);
  }
}
