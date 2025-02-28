import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

    backendBaseUrl = environment.backendBaseUrl + ''
    constructor(
        private http:HttpClient
    ) { }

    getOptions(){
        return new HttpHeaders({
            "Content-type":"application/json",
            // "Authorization":`Bearer ${localStorage.getItem('access')!}`,
        })
    }

    retrieve():Observable<any>{
        return this.http.get<any>(
            `${this.backendBaseUrl}/legals`,
            {headers:this.getOptions()}
        )
    }
}
