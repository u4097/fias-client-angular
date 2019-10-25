import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FindByRegionGQL, FindByShortOffLiveGQL} from "./generated/graphql";
import {Address} from "./component/domain/fiasDataTypes";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export  class DataService {
    addresses: Address[];
    public selectedAddresses = [];

    constructor(
        private http: HttpClient,
        private findByRegion:FindByRegionGQL,
        private findByShortOffLive:FindByShortOffLiveGQL
) {
    }

    getAddress(): Observable<Address[]> {
        return this.findByShortOffLive.watch({
            shortName: "ул",
            offName: "Кирова",
            liveStatus: "1"
        })
            .valueChanges.pipe(
                map(res => res.data.findByShortNameOffNameLiveStatus)
            )
    }

    filterAddresses() {
        const addresses = this.addresses;
        const filteredAddressList = [];
        for (const address of addresses) {
            for (const selectedAddress of this.selectedAddresses) {
                if (address.id === selectedAddress.id) {
                    filteredAddressList.push(selectedAddress);
                }
            }
        }
        return filteredAddressList;
    }

}
