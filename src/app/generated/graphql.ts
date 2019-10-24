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
  aoId?: Maybe<Scalars['String']>,
  aoGuid?: Maybe<Scalars['String']>,
  offName?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  addressById?: Maybe<Address>,
};


export type QueryAddressByIdArgs = {
  aoId?: Maybe<Scalars['String']>
};

export type AddressByIdQueryVariables = {
  aoId?: Maybe<Scalars['String']>
};


export type AddressByIdQuery = (
  { __typename?: 'Query' }
  & { addressById: Maybe<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'aoId' | 'aoGuid' | 'offName' | 'shortName'>
  )> }
);


export const AddressByIdDocument = gql`
    query AddressById($aoId: String) {
  addressById(aoId: $aoId) {
    id
    aoId
    aoGuid
    offName
    shortName
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddressByIdGQL extends Apollo.Query<AddressByIdQuery, AddressByIdQueryVariables> {
    document = AddressByIdDocument;
    
  }