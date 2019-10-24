import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import gql from 'graphql-tag';
import {PostByIdGQL, UserByIdGQL} from "../generated/graphql";

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

type Variables = {
    id: number;
}

type Response = {
    user: User;
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

    constructor(private apollo: Apollo,
                private userGQL: UserByIdGQL,
                private  postGQL: PostByIdGQL
    ) {

    }

    ngOnInit() {
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


        /*
                 this.apollo.watchQuery<Response, Variables>({
                          query: gql`
                               query user($id: ID!){
                           user(id:$id) {
                           id
                           firstname
                               age
                          }
                      }
                    `,
                    variables: {
                        id:1,
                    },
                })
                .valueChanges.subscribe(({data}) => {
                this.user = data.user;
                console.log(this.user.firstname);
                  });
        */

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

    }

}
