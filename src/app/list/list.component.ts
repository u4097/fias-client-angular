import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {
    AddressByGuidGQL,
    AddressByIdGQL,
    AddressByOffNameAndLiveStatusGQL,
    AddressByOffNameGQL,
    FindByShortNameOffNameLiveStatusGQL
} from "../generated/graphql";
import {map} from "rxjs/operators";
import {Address} from "../component/domain/fiasDataTypes";


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    address: Observable<Address[]>;

    constructor(
                // private apollo: Apollo,
                private addressGQL: AddressByIdGQL,
                private addressByGuid: AddressByGuidGQL,
                private addressByName: AddressByOffNameGQL,
                private addressByNameAndLiveStatus: AddressByOffNameAndLiveStatusGQL,
                private addressShortNameOffNameAndLiveStatus: FindByShortNameOffNameLiveStatusGQL
    ) {

    }

    ngOnInit() {

        /*
                this.addressGQL.watch({aoId: "4b9549bc-2965-4c81-aca8-1d3d1c60870d"})
                    .valueChanges
                    .subscribe(({data}) => {
                        this.address = data.addressById;
                        // console.log(this.address.offName);
                        console.log(data.addressById);
                    });
        */


        /*
                this.addressByGuid.watch({aoGuid: "53ede354-415b-4744-9aa3-6be7e9f1c5ec"})
                    .valueChanges
                    .subscribe(({data}) => {
                        this.addresses = data.addressByGuid
                        // console.log(addrArr.pop());
                    });
        */

        /*
                this.addressByName.watch({offName: "Саранск"})
                    .valueChanges
                    .subscribe(({data}) => {
                        this.address = data.addressByOffName
                        console.log(this.address.pop());
                    });
        */

        /*
                this.addressByNameAndLiveStatus.watch({offName: "Москва", liveStatus: "1"})
                    .valueChanges
                    .subscribe(({data}) => {
                        this.address = data.addressByOffNameAndLiveStatus
                        console.log(this.address.pop());
                    });
        */

        this.address = this.addressShortNameOffNameAndLiveStatus.watch({
            shortName: "г",
            offName: "Санкт-Петербург",
            liveStatus: "1"
        })
            .valueChanges.pipe(
                map(res => res.data.findByShortNameOffNameLiveStatus)
            )
    }
}
