import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private user:any;
apiUrl=environment.apiUrl
  constructor(private http:HttpClient) { }

  getRequest(addr:any):Observable<any>{
    return this.http.get<any>(this.apiUrl+addr)

  }
  postRequest(addr:any,data:any):Observable<any>{
    return this.http.post<any>(this.apiUrl+addr,data)
   
  }
  isloggedIn(){
    
  }
}
