export class Contact {
  public id?: number;
  public fullName: string;
  public email: string;
  public phoneNo: string;
  public address: string;
  public addressType?: AddressType;
  constructor(
    id: number,
    fullName: string,
    email: string,
    phoneNo: string,
    address: string,
    addressType: AddressType
  ) {
    (this.id = id),
      (this.fullName = fullName),
      (this.email = email),
      (this.phoneNo = phoneNo),
      (this.address = address),
      (this.addressType = addressType);
  }
}

export class AddContact {
  public id?: number;
  public fullName: string;
  public email: string;
  public phoneNo: string;
  public address: string;
  public addressType?: AddressType;
  constructor(
    id: number,
    fullName: string,
    email: string,
    phoneNo: string,
    address: string,
    addressType: AddressType
  ) {
    (this.id = id),
      (this.fullName = fullName),
      (this.email = email),
      (this.phoneNo = phoneNo),
      (this.address = address),
      (this.addressType = addressType);
  }
}

export class UpdateContact {
  public id?: number;
  public fullName: string;
  public email: string;
  public phoneNo: string;
  public address: string;
  public addressType: AddressType;
  constructor(
    id: number,
    fullName: string,
    email: string,
    phoneNo: string,
    address: string,
    addressType: AddressType
  ) {
    (this.id = id),
      (this.fullName = fullName),
      (this.email = email),
      (this.phoneNo = phoneNo),
      (this.address = address),
      (this.addressType = addressType);
  }
}

export class ViewContact {
  public id?: number;
  public fullName: string;
  public email: string;
  public phoneNo: string;
  public address: string;
  public addressType: AddressType;
  constructor(
    id: number,
    fullName: string,
    email: string,
    phoneNo: string,
    address: string,
    addressType: AddressType
  ) {
    (this.id = id),
      (this.fullName = fullName),
      (this.email = email),
      (this.phoneNo = phoneNo),
      (this.address = address),
      (this.addressType = addressType);
  }
}

enum AddressType {
  Home = 0,
  Work = 1,
}
