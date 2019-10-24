import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import gql from 'graphql-tag';
import {AddressByIdGQL} from "../generated/graphql";
// import {PostByIdGQL, UserByIdGQL} from "../generated/graphql";

type User = {
    id: string;
    firstname: string;
    age: number;
}

type Post = {
    id: string;
    user: User;
    comments: Comment[]
}

type Comment = {
    id: string;
    text: string;
}

type Query = {
    users: User[];
    user(id: number): User;
}

type AddressById = {
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
    users: Observable<User[]>;
    user: User;
    post: Post;
    address: AddressById;

    constructor(private apollo: Apollo,
                private addressGQL: AddressByIdGQL
    ) {

    }

    ngOnInit() {
/*
        this.users = this.apollo.watchQuery<Query>({
            query: gql`
                query users {
                    users {
                        id
                        firstname
                        age
                    }
                }
            `
        })
        .valueChanges
        .pipe(map(result => result.data.users));

*/

        this.addressGQL.watch({aoId: "4b9549bc-2965-4c81-aca8-1d3d1c60870d"})
            .valueChanges
            .subscribe(({data}) => {
                this.address = data.addressById;
                console.log(this.address.offName);
            });

/*
        this.userGQL.watch({id: "3"})
            .valueChanges
            .subscribe(({data}) => {
            this.user = data.user;
            console.log(this.user.firstname);
        });


        this.postGQL.watch({id: "3"})
            .valueChanges
            .subscribe(({data}) => {
                this.post = data.post;
                console.log(this.post.comments.pop()
                );
            });
*/

    }

}
