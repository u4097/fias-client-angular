import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';

import {AddressByGuidGQL, AddressByIdGQL} from "../generated/graphql";




type Address = {
    id?: string;
    aoId?: string;
    aoGuid?: string;
    offName?: string;
    shortName?: string;
}


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    address: Address;
    addresses: [Address];

    constructor(private apollo: Apollo,
                private addressGQL: AddressByIdGQL,
                private addressByGuid: AddressByGuidGQL

    ) {

    }

    ngOnInit() {

        this.addressGQL.watch({aoId: "4b9549bc-2965-4c81-aca8-1d3d1c60870d"})
            .valueChanges
            .subscribe(({data}) => {
                this.address = data.addressById;
                // console.log(this.address.offName);
                console.log(data.addressById);
            });

        let addrArr: Array<Address> = [];
        this.addressByGuid.watch({aoGuid: "53ede354-415b-4744-9aa3-6be7e9f1c5ec"})
            .valueChanges
            .subscribe(({data}) => {
                addrArr = data.addressByGuid
                console.log(addrArr.pop());
            });

    }

}
