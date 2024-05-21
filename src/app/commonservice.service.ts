import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  url = 'http://localhost:3000';
  addtoCartList: any[] = [];
  addtoFavList: any[] = [];
  constructor(public http: HttpClient) { }
  userLogin(data: any) {
    return this.http.post<any>(this.url + '/login', data)
  }
  userRegistration(data: any) {
    return this.http.post<any>(this.url + '/register', data)
  }
  contactus(data: any) {
    return this.http.post<any>(this.url + '/add-contact-data', data)
  }
  addtoCart(data: any) {
    return this.http.post<any>(this.url + '/add-to-cart', data)
  }
  addtoPayment(data: any) {
    return this.http.post<any>(this.url + '/add-to-payment', data)
  }
  getBlog() {
    return this.http.get<any>(this.url + '/get-blog');
  }
  getBookCat() {
    return this.http.get<any>(this.url + '/get-book-catgories');
  }
  getBook() {
    return this.http.get<any>(this.url + '/get-book');
  }
}
