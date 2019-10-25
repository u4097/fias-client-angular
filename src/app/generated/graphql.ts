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
  liveStatus?: Maybe<Scalars['String']>,
  regionCode?: Maybe<Scalars['String']>,
  cityCode?: Maybe<Scalars['String']>,
  aoLevel?: Maybe<Scalars['String']>,
  placeCode?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  addressById?: Maybe<Address>,
  addressByGuid?: Maybe<Array<Maybe<Address>>>,
  addressByOffName?: Maybe<Array<Maybe<Address>>>,
  addressByOffNameAndLiveStatus?: Maybe<Array<Maybe<Address>>>,
  findByShortNameOffNameLiveStatus?: Maybe<Array<Maybe<Address>>>,
  findByRegionCodeAndShortNameAndOffNameAndLiveStatus?: Maybe<Array<Maybe<Address>>>,
  findByCityCodeAndRegionCodeAndShortNameAndOffNameAndLiveStatus?: Maybe<Array<Maybe<Address>>>,
};


export type QueryAddressByIdArgs = {
  aoId?: Maybe<Scalars['String']>
};


export type QueryAddressByGuidArgs = {
  aoGuid?: Maybe<Scalars['String']>
};


export type QueryAddressByOffNameArgs = {
  offName?: Maybe<Scalars['String']>
};


export type QueryAddressByOffNameAndLiveStatusArgs = {
  offName?: Maybe<Scalars['String']>,
  liveStatus?: Maybe<Scalars['String']>
};


export type QueryFindByShortNameOffNameLiveStatusArgs = {
  shortName?: Maybe<Scalars['String']>,
  offName?: Maybe<Scalars['String']>,
  liveStatus?: Maybe<Scalars['String']>
};


export type QueryFindByRegionCodeAndShortNameAndOffNameAndLiveStatusArgs = {
  regionCode?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
  offName?: Maybe<Scalars['String']>,
  liveStatus?: Maybe<Scalars['String']>
};


export type QueryFindByCityCodeAndRegionCodeAndShortNameAndOffNameAndLiveStatusArgs = {
  cityCode?: Maybe<Scalars['String']>,
  regionCode?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
  offName?: Maybe<Scalars['String']>,
  liveStatus?: Maybe<Scalars['String']>
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

export type AddressByGuidQueryVariables = {
  aoGuid?: Maybe<Scalars['String']>
};


export type AddressByGuidQuery = (
  { __typename?: 'Query' }
  & { addressByGuid: Maybe<Array<Maybe<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'aoId' | 'aoGuid' | 'offName' | 'shortName'>
  )>>> }
);

export type AddressByOffNameQueryVariables = {
  offName?: Maybe<Scalars['String']>
};


export type AddressByOffNameQuery = (
  { __typename?: 'Query' }
  & { addressByOffName: Maybe<Array<Maybe<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'aoId' | 'aoGuid' | 'offName' | 'shortName'>
  )>>> }
);

export type AddressByOffNameAndLiveStatusQueryVariables = {
  offName?: Maybe<Scalars['String']>,
  liveStatus?: Maybe<Scalars['String']>
};


export type AddressByOffNameAndLiveStatusQuery = (
  { __typename?: 'Query' }
  & { addressByOffNameAndLiveStatus: Maybe<Array<Maybe<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'aoId' | 'aoGuid' | 'offName' | 'shortName' | 'liveStatus' | 'cityCode'>
  )>>> }
);

export type FindByShortOffLiveQueryVariables = {
  shortName?: Maybe<Scalars['String']>,
  offName?: Maybe<Scalars['String']>,
  liveStatus?: Maybe<Scalars['String']>
};


export type FindByShortOffLiveQuery = (
  { __typename?: 'Query' }
  & { findByShortNameOffNameLiveStatus: Maybe<Array<Maybe<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'aoId' | 'aoGuid' | 'offName' | 'shortName' | 'liveStatus' | 'regionCode' | 'cityCode' | 'aoLevel' | 'placeCode'>
  )>>> }
);

export type FindByRegionQueryVariables = {
  regionCode?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
  offName?: Maybe<Scalars['String']>,
  liveStatus?: Maybe<Scalars['String']>
};


export type FindByRegionQuery = (
  { __typename?: 'Query' }
  & { findByRegionCodeAndShortNameAndOffNameAndLiveStatus: Maybe<Array<Maybe<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'aoId' | 'aoGuid' | 'offName' | 'shortName' | 'liveStatus' | 'regionCode' | 'cityCode' | 'aoLevel' | 'placeCode'>
  )>>> }
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
export const AddressByGuidDocument = gql`
    query AddressByGuid($aoGuid: String) {
  addressByGuid(aoGuid: $aoGuid) {
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
  export class AddressByGuidGQL extends Apollo.Query<AddressByGuidQuery, AddressByGuidQueryVariables> {
    document = AddressByGuidDocument;
    
  }
export const AddressByOffNameDocument = gql`
    query AddressByOffName($offName: String) {
  addressByOffName(offName: $offName) {
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
  export class AddressByOffNameGQL extends Apollo.Query<AddressByOffNameQuery, AddressByOffNameQueryVariables> {
    document = AddressByOffNameDocument;
    
  }
export const AddressByOffNameAndLiveStatusDocument = gql`
    query AddressByOffNameAndLiveStatus($offName: String, $liveStatus: String) {
  addressByOffNameAndLiveStatus(offName: $offName, liveStatus: $liveStatus) {
    id
    aoId
    aoGuid
    offName
    shortName
    liveStatus
    cityCode
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddressByOffNameAndLiveStatusGQL extends Apollo.Query<AddressByOffNameAndLiveStatusQuery, AddressByOffNameAndLiveStatusQueryVariables> {
    document = AddressByOffNameAndLiveStatusDocument;
    
  }
export const FindByShortOffLiveDocument = gql`
    query FindByShortOffLive($shortName: String, $offName: String, $liveStatus: String) {
  findByShortNameOffNameLiveStatus(shortName: $shortName, offName: $offName, liveStatus: $liveStatus) {
    id
    aoId
    aoGuid
    offName
    shortName
    liveStatus
    regionCode
    cityCode
    aoLevel
    placeCode
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindByShortOffLiveGQL extends Apollo.Query<FindByShortOffLiveQuery, FindByShortOffLiveQueryVariables> {
    document = FindByShortOffLiveDocument;
    
  }
export const FindByRegionDocument = gql`
    query FindByRegion($regionCode: String, $shortName: String, $offName: String, $liveStatus: String) {
  findByRegionCodeAndShortNameAndOffNameAndLiveStatus(regionCode: $regionCode, shortName: $shortName, offName: $offName, liveStatus: $liveStatus) {
    id
    aoId
    aoGuid
    offName
    shortName
    liveStatus
    regionCode
    cityCode
    aoLevel
    placeCode
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindByRegionGQL extends Apollo.Query<FindByRegionQuery, FindByRegionQueryVariables> {
    document = FindByRegionDocument;
    
  }