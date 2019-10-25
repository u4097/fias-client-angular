import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FindByShortNameOffNameLiveStatusGQL} from "./generated/graphql";
import {Address} from "./component/domain/fiasDataTypes";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    addresses: Address[];
    public selectedAddresses = [];

    // postUrl = "https://jsonplaceholder.typicode.com/posts";

    constructor(
        private http: HttpClient,
        private addressShortNameOffNameAndLiveStatus: FindByShortNameOffNameLiveStatusGQL
    ) {
    }

    getAddress(): Observable<Address[]> {
        return this.addressShortNameOffNameAndLiveStatus.watch({
            shortName: "г",
            offName: "Санкт-Петербург",
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
                if (address.offName === selectedAddress.offName) {
                    filteredAddressList.push(selectedAddress);
                }
            }
        }
        return filteredAddressList;
    }

    /*
        filterPosts() {
            const posts = this.posts;
            const filteredPostsList = [];
            for (const post of posts) {
                for (const selectedPost of this.selectedPosts) {
                    if (post.title === selectedPost.title) {
                        filteredPostsList.push(selectedPost);
                    }
                }
            }
            return filteredPostsList;
        }
    */
}
