export class Contacts {
  id: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  addressType: AddressType;
  constructor() {
    this.id = 0;
    this.fullName = "";
    this.phoneNumber = "";
    this.email = "";
    this.address = "";
    this.addressType = 0;
  }
}

export enum AddressType {
  Home = 0,
  Work = 1,
}
