export class Contact {
  public id?: number;
  public fullName?: string;
  public email?: string;
  public phoneNumber?: number;
  public address?: string;
  public addressType?: AddressType;
  constructor(
    id: number,
    fullName: string,
    email: string,
    phoneNumber: number,
    address: string,
    addressType: AddressType
  ) {
    (this.id = id),
      (this.fullName = fullName),
      (this.email = email),
      (this.phoneNumber = phoneNumber),
      (this.address = address),
      (this.addressType = addressType);
  }
}

export class AddContact {
  public id?: number;
  public fullName: string;
  public email: string;
  public phoneNumber?: number;
  public address: string;
  public addressType?: AddressType;
  constructor(
    id: number,
    fullName: string,
    email: string,
    phoneNumber: number,
    address: string,
    addressType: AddressType
  ) {
    (this.id = id),
      (this.fullName = fullName),
      (this.email = email),
      (this.phoneNumber = phoneNumber),
      (this.address = address),
      (this.addressType = addressType);
  }
}

export class UpdateContact {
  public id?: number;
  public fullName: string;
  public email: string;
  public phoneNumber?: number;
  public address: string;
  public addressType?: AddressType;
  constructor(
    id: number,
    fullName: string,
    email: string,
    phoneNumber: number,
    address: string,
    addressType: AddressType
  ) {
    (this.id = id),
      (this.fullName = fullName),
      (this.email = email),
      (this.phoneNumber = phoneNumber),
      (this.address = address),
      (this.addressType = addressType);
  }
}

export class ViewContact {
  public id?: number;
  public fullName: string;
  public email: string;
  public phoneNumber: number;
  public address: string;
  public addressType: AddressType;
  constructor(
    id: number,
    fullName: string,
    email: string,
    phoneNumber: number,
    address: string,
    addressType: AddressType
  ) {
    (this.id = id),
      (this.fullName = fullName),
      (this.email = email),
      (this.phoneNumber = phoneNumber),
      (this.address = address),
      (this.addressType = addressType);
  }
}

enum AddressType {
  Home = 0,
  Work = 1,
}
