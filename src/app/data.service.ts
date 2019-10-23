import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Post} from "./post";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    selectedPosts = [];
    public posts: Post[];
    postUrl = "https://jsonplaceholder.typicode.com/posts";

    constructor(
        private http: HttpClient
    ) {
    }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.postUrl);
    }


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
}
