import {Component, OnInit} from '@angular/core';
import {Post} from "../../post";
import {DataService} from "../../data.service";
import {Address} from "../domain/fiasDataTypes";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    addresses: Address[];

    constructor(
        private dataService: DataService
    ) {
    }

    ngOnInit() {

        this.dataService.getAddress().subscribe(addresses => {
            this.addresses = addresses;
            this.dataService.addresses = this.addresses;
        });
    }

    onSelectedPost() {

        if (this.dataService.selectedAddresses.length > 0) {
            this.addresses = this.dataService.filterAddresses();
        } else {
            this.addresses = this.dataService.addresses;
        }
    }

}
