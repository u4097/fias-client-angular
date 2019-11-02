import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};




export type Address = {
   __typename?: 'Address',
  id: Scalars['ID'],
  recordId?: Maybe<Scalars['String']>,
  guid?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  regionCode?: Maybe<Scalars['String']>,
  cityCode?: Maybe<Scalars['String']>,
  placeCode?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  startDate?: Maybe<Scalars['String']>,
  updateDate?: Maybe<Scalars['String']>,
  endDate?: Maybe<Scalars['String']>,
  fiasStatus?: Maybe<Scalars['Int']>,
  liveStatus?: Maybe<Scalars['Int']>,
  kladrStatus?: Maybe<Scalars['Int']>,
};

export type Query = {
   __typename?: 'Query',
  addressByGuid?: Maybe<Array<Maybe<Address>>>,
  addressByName?: Maybe<Array<Maybe<Address>>>,
};


export type QueryAddressByGuidArgs = {
  guid?: Maybe<Scalars['String']>
};


export type QueryAddressByNameArgs = {
  name?: Maybe<Scalars['String']>
};

export type AddressByNameQueryVariables = {
  name?: Maybe<Scalars['String']>
};


export type AddressByNameQuery = (
  { __typename?: 'Query' }
  & { addressByName: Maybe<Array<Maybe<(
    { __typename?: 'Address' }
    & Pick<Address, 'recordId' | 'regionCode' | 'level' | 'name' | 'type'>
  )>>> }
);


export const AddressByNameDocument = gql`
    query addressByName($name: String) {
  addressByName(name: $name) {
    recordId
    regionCode
    level
    name
    type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddressByNameGQL extends Apollo.Query<AddressByNameQuery, AddressByNameQueryVariables> {
    document = AddressByNameDocument;
    
  }