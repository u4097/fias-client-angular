import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DataService} from "../../data.service";
import {Post} from "../../post";

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
    myControl = new FormControl();
    allPosts: Post[];
    autoCompleteList: any[];

    @ViewChild('autocompleteInput', null) autocompleteInput: ElementRef;
    @Output() onSelectedOption = new EventEmitter();

    constructor(
        private dataService: DataService
    ) {
    }

    ngOnInit() {
        // get all posts
        this.dataService.getPosts().subscribe(posts => {
            this.allPosts = posts;
        });

        // when user types something in input, the value changes will through this
        this.myControl.valueChanges.subscribe(input => {
            this.autoCompleteList = this.filterPostsOnType(input)
        })
    }


    filterPostsOnType(input) {
        if (typeof input != "string") {
            return [];
        }
        if (input === '' || input === null) {
            return [];
        }

        return input ? this.allPosts.filter(s => s.title.toLowerCase().indexOf(input.toLowerCase()) != -1)
            : this.allPosts;
    }


    filterSelectedPostList(event) {
        const posts = event.source.value;
        if (!posts) {
            this.dataService.searchOption = []
        } else {
            this.dataService.searchOption.push(posts);
            this.onSelectedOption.emit(this.dataService.searchOption)
        }

        this.focusOnPlaceInput();
    }

    removeChips(option) {
        let index = this.dataService.searchOption.indexOf(option);
        if (index >= 0)
            this.dataService.searchOption.splice(index, 1);
        this.focusOnPlaceInput();
        this.onSelectedOption.emit(this.dataService.searchOption);
    }

    focusOnPlaceInput() {
        this.autocompleteInput.nativeElement.focus();
        this.autocompleteInput.nativeElement.value = '';
    }

    displayFn(post: Post) {
        let k = post ? post.title : post;
        return k;
    }
}
