import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Trooper } from './trooper';
import { MessageService } from './message.service';
import { DeployedTrooper } from './deployedTrooper';


@Injectable({ providedIn: 'root' })
export class TrooperService {

  private troopersUrl = 'api/troopers';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET troopers from the server */
  getTroopers(): Observable<Trooper[]> {
    return this.http.get<Trooper[]>(this.troopersUrl)
      .pipe(
        tap(_ => this.log('fetched troopers')),
        catchError(this.handleError<Trooper[]>('getTroopers', []))
      );
  }
  
  getDeployedTroopers(deployedTrooper1: string, deployedTrooper2: string): Observable<Trooper[]> {
    return this.http.get<Trooper[]>(this.troopersUrl)
    .pipe(
      tap(_ => this.log('fetched troopers')),
      catchError(this.handleError<Trooper[]>('getTroopers', []))
    );
  }

  /** GET trooper by id. Return `undefined` when id not found */
  getTrooperNo404<Data>(id: number): Observable<Trooper> {
    const url = `${this.troopersUrl}/?id=${id}`;
    return this.http.get<Trooper[]>(url)
      .pipe(
        map(troopers => troopers[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} trooper id=${id}`);
        }),
        catchError(this.handleError<Trooper>(`getTrooper id=${id}`))
      );
  }

  /** GET trooper by id. Will 404 if id not found */
  getTrooper(id: number): Observable<Trooper> {
    const url = `${this.troopersUrl}/${id}`;
    return this.http.get<Trooper>(url).pipe(
      tap(_ => this.log(`fetched trooper id=${id}`)),
      catchError(this.handleError<Trooper>(`getTrooper id=${id}`))
    );
  }

  /* GET troopers whose name contains search term */
  searchTroopers(term: string): Observable<Trooper[]> {
    if (!term.trim()) {
      // if not search term, return empty trooper array.
      return of([]);
    }
    return this.http.get<Trooper[]>(`${this.troopersUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found troopers matching "${term}"`) :
         this.log(`no troopers matching "${term}"`)),
      catchError(this.handleError<Trooper[]>('searchTroopers', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new trooper to the server */
  addTrooper(trooper: Trooper): Observable<Trooper> {
    return this.http.post<Trooper>(this.troopersUrl, trooper, this.httpOptions).pipe(
      tap((newTrooper: Trooper) => this.log(`added trooper w/ id=${newTrooper.id}`)),
      catchError(this.handleError<Trooper>('addTrooper'))
    );
  }

  /** DELETE: delete the trooper from the server */
  deleteTrooper(id: number): Observable<Trooper> {
    const url = `${this.troopersUrl}/${id}`;

    return this.http.delete<Trooper>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted trooper id=${id}`)),
      catchError(this.handleError<Trooper>('deleteTrooper'))
    );
  }

  /** PUT: update the trooper on the server */
  updateTrooper(trooper: Trooper): Observable<any> {
    return this.http.put(this.troopersUrl, trooper, this.httpOptions).pipe(
      tap(_ => this.log(`updated trooper id=${trooper.id}`)),
      catchError(this.handleError<any>('updateTrooper'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a TrooperService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TrooperService: ${message}`);
  }
}