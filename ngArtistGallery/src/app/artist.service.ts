import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Artist } from './models/artist';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  // private baseUrl = 'http://localhost:8084/';
  // private url = this.baseUrl + 'api/artists';
  baseUrl = environment.baseUrl
  url = this.baseUrl + 'api/artists';

  constructor(private http: HttpClient) { }

  index(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.url + '?sorted=true')
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }
create(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.url, artist).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('TodoService:.create(): Error retrieving creating todo');
      })
    );
  }

  update(artist: Artist): Observable<Artist> {
    return this.http.put<Artist>(`${this.url}/${artist.id}`, artist).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('ArtistService:.update(): Error updating artist');
      })
    );
  }

  destroy(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('ArtistService:.destroy(): Error destroying artist');
      })
    );
  }


}
