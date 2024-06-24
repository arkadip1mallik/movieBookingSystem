import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url = 'http://192.168.87.251';
  constructor(private http: HttpClient) { }

  // post(url, data) {
  //   return this.http.post(`${this.url}/`, {
  //     headers: {},
  //   })
  // }

  // resetPost(url, data) {
  //   const httpOption = {
  //     headers: new HttpHeaders({
  //       'Headers': localStorage.getItem('token')
  //     })
  //   }
  //   return this.http.post(this.url + url, data, httpOption)
  // }

  // moviePost(url, data) {
  //   console.log("url : ", url);
  //   console.log("data : ", data);

  //   return this.http.post(this.url + url, data)
  // }

  // getMethod(url) {
  //   return this.http.get(`${this.url}/fdndjfl`, {
  //     headers: {},
  //     params: params,
  //   })
  // }
}
