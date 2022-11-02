import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AddContact,
  Contact,
  PagiginatedContacts,
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

  findByName(name: any): Observable<PagiginatedContacts[]> {
    return this.http.get<any[]>(`${this._baseUrl}?qName=${name}`);
  }

  // getContacts(
  //   pageNumber: number,
  //   pageSize: number
  // ): Observable<PagiginatedContacts> {
  //   return this.http.get<PagiginatedContacts>(
  //     `${
  //       this._baseUrl
  //     }/${'?pageNumber='}${pageNumber}&${'pageSize='}${pageSize}`
  //   );
  // }

  getAllPagiginatedContacts(
    pageNumber: number,
    pageSize: number,
    name: string,
    orderBy: string,
    isDesc: boolean
  ): Observable<PagiginatedContacts> {
    return this.http.get<PagiginatedContacts>(
      `${
        this._baseUrl
      }/${'?pageNumber='}${pageNumber}&${'pageSize='}${pageSize}&${'qName='}${name}&${'orderBy='}${orderBy}&${'isDesc='}${isDesc}`
    );
  }
}
