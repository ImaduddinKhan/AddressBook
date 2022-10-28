export class Contacts {
  id?: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  addressType?: AddressType;

  constructor() {
    this.fullName = "";
    this.phoneNumber = "";
    this.email = "";
    this.address = "";
    this.addressType;
  }
}

export class AddContact {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  addressType?: AddressType;

  constructor() {
    this.fullName = "";
    this.phoneNumber = "";
    this.email = "";
    this.address = "";
    this.addressType;
  }
}

export class UpdateContact {
  id?: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  addressType?: AddressType;

  constructor() {
    this.fullName = "";
    this.phoneNumber = "";
    this.email = "";
    this.address = "";
    this.addressType;
  }
}

export class DetailContact {
  id?: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  addressType?: AddressType;

  constructor() {
    this.fullName = "";
    this.phoneNumber = "";
    this.email = "";
    this.address = "";
    this.addressType;
  }
}


export enum AddressType {
  Home = 0,
  Work = 1,
}
