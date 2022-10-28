import { Injectable } from "@angular/core";
import { Contacts} from "./addressbook.model";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class AddressBookService {
  constructor(private http: HttpClient) {

  }

  readonly _baseUrl = "https://localhost:44384/api/AddressBook";
  model: Contacts = new Contacts();
  list: Contacts[];

  postContact() {
    return this.http.post(this._baseUrl, this.model);
  }

  putContact() {
    return this.http.put(`${this._baseUrl}/${this.model.id}`, this.model);
  }

  deleteContact(id: number) {
    return this.http.delete(`${this._baseUrl}/${id}`);
  }

  getContacts() {
    return this.http.get(this._baseUrl).toPromise().then(result => this.list = result as Contacts[]);
  }

  getById(id: number) {
    return this.http.get(`${this._baseUrl}/${id}`);
  }
}
