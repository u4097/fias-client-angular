import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Address} from "./component/domain/fiasDataTypes";
import {map} from "rxjs/operators";
import {AddressByNameGQL} from "./generated/graphql";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  addresses: Address[];
  addressesByName: Address[];
  public selectedAddresses = [];

  constructor(
      private http: HttpClient,
      public byNameGQL: AddressByNameGQL
  ) {
  }

  getAddress(): Observable<Address[]> {
    return this.byNameGQL.watch({
      name: "Кирова"
    })
    .valueChanges.pipe(
        map(res => res.data.addressByName)
    )
  }

  getAddressByName(name: string): Observable<Address[]> {
    return this.byNameGQL.watch({
      name: name,
    })
    .valueChanges.pipe(
        map(res => res.data.addressByName)
    )
  }


  filterAddresses() {
    const addresses = this.addresses;
    const filteredAddressList = [];
    for (const address of addresses) {
      for (const selectedAddress of this.selectedAddresses) {
        if (address.recordId === selectedAddress.recordId) {
          filteredAddressList.push(selectedAddress);
        }
      }
    }
    return filteredAddressList;
  }

}
