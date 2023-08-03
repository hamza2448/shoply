import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
url=environment.apiUrl +'/login';
logOutUrl=environment.apiUrl +'/logout';
  constructor( private http :HttpClient) { }
 


login(data:any){
return this.http.post(`${this.url}`,data);

}
loggedOut(data:any){
  return this.http.post(`${this.logOutUrl}`,data ,{headers:{'Authorization':`Bearer ${localStorage.getItem('#####')}`}}); 
}
}
