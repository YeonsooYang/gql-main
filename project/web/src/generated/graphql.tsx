/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Director = {
  __typename?: 'Director';
  /** 감독아이디 */
  id: Scalars['Int']['output'];
  /** 감독이름 */
  name: Scalars['String']['output'];
};

export type Film = {
  __typename?: 'Film';
  /** 영화 줄거리 및 설명 */
  description: Scalars['String']['output'];
  director: Director;
  /** 제작자 고유 아이디 */
  director_id: Scalars['Int']['output'];
  /** 영화 장르 */
  genre: Scalars['String']['output'];
  /** 영화 고유 아이디 */
  id: Scalars['Int']['output'];
  /** 포스터 이미지 URL */
  posterImg: Scalars['String']['output'];
  /** 개봉일 */
  release: Scalars['String']['output'];
  /** 영화 러닝 타임, minute */
  runningTime: Scalars['Float']['output'];
  /** 영화 부제목 */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** 영화 제목 */
  title: Scalars['String']['output'];
};

export type PaginatedFilms = {
  __typename?: 'PaginatedFilms';
  cursor?: Maybe<Scalars['Int']['output']>;
  films: Array<Film>;
};

export type Query = {
  __typename?: 'Query';
  film?: Maybe<Film>;
  films: PaginatedFilms;
};


export type QueryFilmArgs = {
  filmId: Scalars['Int']['input'];
};


export type QueryFilmsArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type FilmQueryVariables = Exact<{
  filmId: Scalars['Int']['input'];
}>;


export type FilmQuery = { __typename?: 'Query', film?: { __typename?: 'Film', id: number, title: string, subtitle?: string | null, description: string, genre: string, runningTime: number, posterImg: string, release: string, director: { __typename?: 'Director', id: number, name: string } } | null };

export type FilmsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FilmsQuery = { __typename?: 'Query', films: { __typename?: 'PaginatedFilms', cursor?: number | null, films: Array<{ __typename?: 'Film', id: number, title: string, subtitle?: string | null, runningTime: number, release: string, posterImg: string, director: { __typename?: 'Director', name: string } }> } };


export const FilmDocument = gql`
    query film($filmId: Int!) {
  film(filmId: $filmId) {
    id
    title
    subtitle
    description
    genre
    runningTime
    posterImg
    release
    director {
      id
      name
    }
  }
}
    `;

/**
 * __useFilmQuery__
 *
 * To run a query within a React component, call `useFilmQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilmQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilmQuery({
 *   variables: {
 *      filmId: // value for 'filmId'
 *   },
 * });
 */
export function useFilmQuery(baseOptions: Apollo.QueryHookOptions<FilmQuery, FilmQueryVariables> & ({ variables: FilmQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilmQuery, FilmQueryVariables>(FilmDocument, options);
      }
export function useFilmLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilmQuery, FilmQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilmQuery, FilmQueryVariables>(FilmDocument, options);
        }
export function useFilmSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FilmQuery, FilmQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FilmQuery, FilmQueryVariables>(FilmDocument, options);
        }
export type FilmQueryHookResult = ReturnType<typeof useFilmQuery>;
export type FilmLazyQueryHookResult = ReturnType<typeof useFilmLazyQuery>;
export type FilmSuspenseQueryHookResult = ReturnType<typeof useFilmSuspenseQuery>;
export type FilmQueryResult = Apollo.QueryResult<FilmQuery, FilmQueryVariables>;
export const FilmsDocument = gql`
    query Films($limit: Int, $cursor: Int) {
  films(limit: $limit, cursor: $cursor) {
    cursor
    films {
      id
      title
      subtitle
      runningTime
      director {
        name
      }
      release
      posterImg
    }
  }
}
    `;

/**
 * __useFilmsQuery__
 *
 * To run a query within a React component, call `useFilmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilmsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useFilmsQuery(baseOptions?: Apollo.QueryHookOptions<FilmsQuery, FilmsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilmsQuery, FilmsQueryVariables>(FilmsDocument, options);
      }
export function useFilmsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilmsQuery, FilmsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilmsQuery, FilmsQueryVariables>(FilmsDocument, options);
        }
export function useFilmsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FilmsQuery, FilmsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FilmsQuery, FilmsQueryVariables>(FilmsDocument, options);
        }
export type FilmsQueryHookResult = ReturnType<typeof useFilmsQuery>;
export type FilmsLazyQueryHookResult = ReturnType<typeof useFilmsLazyQuery>;
export type FilmsSuspenseQueryHookResult = ReturnType<typeof useFilmsSuspenseQuery>;
export type FilmsQueryResult = Apollo.QueryResult<FilmsQuery, FilmsQueryVariables>;