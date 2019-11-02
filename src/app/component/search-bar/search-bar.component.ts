import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DataService} from "../../data.service";
import {Address} from "../domain/fiasDataTypes";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  myControl = new FormControl();
  allAddress: Address[];
  autoCompleteList: any[];

  @ViewChild('autocompleteInput', null) autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  constructor(
      public dataService: DataService
  ) {
  }

  ngOnInit() {
    this.dataService.getAddress().subscribe(addr => {
      this.allAddress = addr;
    });

    // when user types something in input, the value changes will through this
    this.myControl.valueChanges.subscribe(input => {
      this.filterAddressesOnType(input)
    })
  }


  filterAddressesOnType(input) {
    if (typeof input != "string") {
      return [];
    }
    if (input === '' || input === null) {
      return [];
    }

    this.dataService.getAddressByName(input).pipe(
        filter((value, index) => (value[index].name.toLowerCase().indexOf(input.toLowerCase()) != -1))
    )
    .subscribe(value => {
          this.autoCompleteList = value;
        },
        error => {
        }
    );

  }


  filterSelectedAddressList(event) {
    const address = event.source.value;
    if (!address) {
      this.dataService.selectedAddresses = []
    } else {
      this.dataService.selectedAddresses.push(address);
      this.onSelectedOption.emit(this.dataService.selectedAddresses)
    }

    this.focusOnPlaceInput();
  }

  removeChips(option) {
    let index = this.dataService.selectedAddresses.indexOf(option);
    if (index >= 0)
      this.dataService.selectedAddresses.splice(index, 1);
    this.focusOnPlaceInput();
    this.onSelectedOption.emit(this.dataService.selectedAddresses);
  }

  focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
  }

}
