import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${"http://10.10.10.139/api/get_movie"}`);
  }

  addMovie(movie: any): Observable<any> {
    return this.http.post<any>(`${"http://10.10.10.139/api/add_movie"}`, movie);
  }

  updateMovie(id: number, movie: any): Observable<any> {
    return this.http.put<any>(`${"http://10.10.10.139/api/edit_movie"}/${id}`, movie);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete<any>(`${"http://10.10.10.139/api/del_movie"}/${id}`);
  }
}
