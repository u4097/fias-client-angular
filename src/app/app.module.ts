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

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchBarComponent,
        HomePageComponent,
        ListComponent,
    ],
    imports: [
        BrowserModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule, MatChipsModule, MatFormFieldModule,
        FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
	ApolloModule,
	HttpLinkModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
	constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({uri: 'https://fakeql.com/graphql/6a0cde06cbd0e6402cc1ad1ea75ea789'}),
      cache: new InMemoryCache()
    });
  }
}
