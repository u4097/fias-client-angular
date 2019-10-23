import {Component, OnInit} from '@angular/core';
import {Post} from "../../post";
import {DataService} from "../../data.service";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    posts: Post[];

    constructor(
        private dataService: DataService
    ) {
    }

    ngOnInit() {
        this.dataService.getPosts().subscribe(posts => {
            this.posts = posts;
            this.dataService.posts = this.posts
        });
    }

    onSelectedPost() {
        if (this.dataService.selectedPosts.length > 0) {
            this.posts = this.dataService.filterPosts();
        } else {
            this.posts = this.dataService.posts;
        }
    }

}
