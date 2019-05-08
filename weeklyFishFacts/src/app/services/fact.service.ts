import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactService {
  message: any;
  constructor(private http: HttpClient) { }
  
  suggestFact(fact){
    this.http.post('http://localhost:3000/api/facts/suggest', fact).subscribe(res =>
      console.log(res)
      );
  }
}
