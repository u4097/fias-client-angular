import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatIconModule, MatInputModule,
    MatAutocompleteModule, MatChipsModule,
    MatFormFieldModule

} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { DataService} from "./data.service";

@NgModule({
    declarations: [
        AppComponent,
        SearchBarComponent,
        HomePageComponent,
    ],
    imports: [
        BrowserModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule, MatChipsModule, MatFormFieldModule,
        FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
